export type ConsentState = {
  necessary: true;
  analytics: boolean;
  advertising: boolean;
  updatedAt: string;
};

export const CONSENT_STORAGE_KEY = "18fifty3.consent.v1";
export const CONSENT_UPDATED_EVENT = "18fifty3-consent-updated";

export const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  advertising: false,
  updatedAt: "",
};

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.advertising !== "boolean") {
      return null;
    }
    return {
      necessary: true,
      analytics: parsed.analytics,
      advertising: parsed.advertising,
      updatedAt: parsed.updatedAt ?? "",
    };
  } catch {
    return null;
  }
}

export function writeConsent(consent: Omit<ConsentState, "updatedAt"> | ConsentState): ConsentState {
  const next: ConsentState = {
    necessary: true,
    analytics: consent.analytics,
    advertising: consent.advertising,
    updatedAt: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: next }));
  }
  return next;
}
