"use client";

type MetaTrackPayload = {
  eventName: string;
  eventId: string;
  eventSourceUrl: string;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function sendMetaServerEvent(payload: MetaTrackPayload) {
  fetch("/api/track/meta", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {
    // best-effort tracking only
  });
}

export function trackLead(source: string = "contact_form_submit") {
  if (typeof window === "undefined") return;
  const eventId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  window.gtag?.("event", "generate_lead", {
    lead_source: source,
    value: 1,
    currency: "AUD",
    event_id: eventId,
  });

  window.fbq?.("track", "Lead", { source }, { eventID: eventId });

  sendMetaServerEvent({
    eventName: "Lead",
    eventId,
    eventSourceUrl: window.location.href,
  });
}
