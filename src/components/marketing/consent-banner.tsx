"use client";

import { useState } from "react";
import { ConsentState, writeConsent } from "@/lib/consent";

type ConsentBannerProps = {
  onChange: (consent: ConsentState) => void;
};

export default function ConsentBanner({ onChange }: ConsentBannerProps) {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [advertising, setAdvertising] = useState(true);

  const save = (next: { analytics: boolean; advertising: boolean }) => {
    const saved = writeConsent({
      necessary: true,
      analytics: next.analytics,
      advertising: next.advertising,
      updatedAt: "",
    });
    onChange(saved);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1200] border-t border-border bg-white p-4 shadow-2xl md:p-6">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-sm font-medium text-primary">
          We use cookies for analytics and advertising (Google Analytics, Meta Pixel, and AdSense). You can accept all, reject non-essential, or manage preferences.
        </p>
        {open && (
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <label className="flex items-center justify-between border border-border px-4 py-3 text-sm">
              <span>Analytics Cookies</span>
              <input checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} type="checkbox" />
            </label>
            <label className="flex items-center justify-between border border-border px-4 py-3 text-sm">
              <span>Advertising Cookies</span>
              <input checked={advertising} onChange={(e) => setAdvertising(e.target.checked)} type="checkbox" />
            </label>
          </div>
        )}
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => save({ analytics: true, advertising: true })}
            className="bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-accent"
          >
            Accept All
          </button>
          <button
            onClick={() => save({ analytics: false, advertising: false })}
            className="border border-border px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary hover:border-accent hover:text-accent"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={() => {
              if (open) {
                save({ analytics, advertising });
              } else {
                setOpen(true);
              }
            }}
            className="border border-border px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary hover:border-accent hover:text-accent"
          >
            {open ? "Save Preferences" : "Manage Preferences"}
          </button>
        </div>
      </div>
    </div>
  );
}
