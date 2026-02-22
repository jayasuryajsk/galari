"use client";

import { useEffect, useMemo, useState } from "react";
import { CONSENT_UPDATED_EVENT, ConsentState, readConsent } from "@/lib/consent";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdSlotProps = {
  slot: string;
  className?: string;
  style?: React.CSSProperties;
};

function ensureAdsense(clientId: string) {
  const scriptId = `adsense-src-${clientId}`;
  if (document.getElementById(scriptId)) return;
  const script = document.createElement("script");
  script.id = scriptId;
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}

export default function AdSlot({ slot, className, style }: AdSlotProps) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const adClient = useMemo(() => clientId?.replace("ca-pub-", "") ?? "", [clientId]);

  useEffect(() => {
    setConsent(readConsent());
    const onConsentUpdated = (event: Event) => {
      const custom = event as CustomEvent<ConsentState>;
      setConsent(custom.detail);
    };
    window.addEventListener(CONSENT_UPDATED_EVENT, onConsentUpdated);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onConsentUpdated);
  }, []);

  useEffect(() => {
    if (!consent?.advertising || !clientId || !slot) return;
    ensureAdsense(clientId);
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // best-effort rendering
    }
  }, [consent, clientId, slot]);

  if (!consent?.advertising || !clientId || !slot) return null;

  return (
    <ins
      className={`adsbygoogle block ${className ?? ""}`}
      style={style ?? { display: "block" }}
      data-ad-client={`ca-pub-${adClient}`}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
