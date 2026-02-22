import type { Metadata } from "next";
import { Merriweather, Nunito_Sans } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Suspense } from "react";
import TrackingManager from "@/components/marketing/tracking-manager";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

const headingFont = Merriweather({
  variable: "--font-galari-heading",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const bodyFont = Nunito_Sans({
  variable: "--font-galari-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GALARI Land & Civil | Civil Construction and Land Management",
  description:
    "GALARI Land & Civil delivers practical civil construction and land management services for government, infrastructure, and private-sector clients.",
  metadataBase: new URL("https://www.galarilandcivil.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.galarilandcivil.com.au",
    title: "GALARI Land & Civil | Civil Construction and Land Management",
    description:
      "GALARI Land & Civil delivers practical civil construction and land management services for government, infrastructure, and private-sector clients.",
    siteName: "GALARI Land & Civil",
    images: [
      {
        url: "https://www.galarilandcivil.com.au/images/galari-hero.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GALARI Land & Civil | Civil Construction and Land Management",
    description:
      "GALARI Land & Civil delivers practical civil construction and land management services for government, infrastructure, and private-sector clients.",
    images: ["https://www.galarilandcivil.com.au/images/galari-hero.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Header />
        <main className="pt-[82px] md:pt-[96px] lg:pt-[106px]">{children}</main>
        <Footer />
        <Suspense fallback={null}>
          <TrackingManager />
        </Suspense>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
