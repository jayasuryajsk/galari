"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ConsentBanner from "@/components/marketing/consent-banner";
import {
  CONSENT_UPDATED_EVENT,
  ConsentState,
  defaultConsent,
  readConsent,
} from "@/lib/consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    adsbygoogle?: unknown[];
  }
}

function appendScript(id: string, src: string, attrs: Record<string, string> = {}) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  Object.entries(attrs).forEach(([key, value]) => script.setAttribute(key, value));
  document.head.appendChild(script);
}

function ensureGtag(gaId: string) {
  appendScript(`ga-src-${gaId}`, `https://www.googletagmanager.com/gtag/js?id=${gaId}`);
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", gaId, { send_page_view: false, anonymize_ip: true });
}

function updateGtagConsent(consent: ConsentState) {
  if (!window.gtag) return;
  window.gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.advertising ? "granted" : "denied",
    ad_user_data: consent.advertising ? "granted" : "denied",
    ad_personalization: consent.advertising ? "granted" : "denied",
  });
}

function ensureMetaPixel(pixelId: string) {
  if (!window.fbq) {
    const fn = function (...args: unknown[]) {
      (fn as unknown as { queue: unknown[] }).queue.push(args);
    };
    (fn as unknown as { queue: unknown[]; loaded: boolean; version: string }).queue = [];
    (fn as unknown as { queue: unknown[]; loaded: boolean; version: string }).loaded = true;
    (fn as unknown as { queue: unknown[]; loaded: boolean; version: string }).version = "2.0";
    window.fbq = fn;
    appendScript("meta-pixel-src", "https://connect.facebook.net/en_US/fbevents.js");
  }

  window.fbq("init", pixelId);
}

export default function TrackingManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [consent, setConsent] = useState<ConsentState | null>(null);

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  const pagePath = useMemo(() => {
    const qs = searchParams.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  }, [pathname, searchParams]);

  useEffect(() => {
    const existing = readConsent();
    setConsent(existing);

    const onConsentUpdated = (event: Event) => {
      const custom = event as CustomEvent<ConsentState>;
      setConsent(custom.detail);
    };

    window.addEventListener(CONSENT_UPDATED_EVENT, onConsentUpdated);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onConsentUpdated);
  }, []);

  useEffect(() => {
    if (!consent) return;

    if (gaId) {
      ensureGtag(gaId);
      updateGtagConsent(consent);
    }

    if (gtmId && (consent.analytics || consent.advertising)) {
      appendScript(`gtm-src-${gtmId}`, `https://www.googletagmanager.com/gtm.js?id=${gtmId}`);
    }

    if (metaPixelId) {
      ensureMetaPixel(metaPixelId);
      window.fbq?.("consent", consent.advertising ? "grant" : "revoke");
    }
  }, [consent, gaId, gtmId, metaPixelId]);

  useEffect(() => {
    if (!consent) return;
    if (consent.analytics && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
    if (consent.advertising && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pagePath, consent]);

  return consent ? null : <ConsentBanner onChange={setConsent} />;
}
