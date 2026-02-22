"use client";

import Image from "next/image";
import PageHeader from "@/components/sections/page-header";

const galleryImages = [
  "https://images.squarespace-cdn.com/content/v1/65d43588ddcb5b7876a3823e/48784dfd-c403-41a4-953f-21ffe56c5df1/rad-123.jpg",
  "https://images.squarespace-cdn.com/content/v1/65d43588ddcb5b7876a3823e/6638dd5b-c323-4886-96e2-d804de966b4c/1818-2.jpg",
  "https://images.squarespace-cdn.com/content/v1/65d43588ddcb5b7876a3823e/76bbae2b-4922-40eb-90b9-44d92aa1e76d/rad-124.jpg",
  "https://images.squarespace-cdn.com/content/v1/65d43588ddcb5b7876a3823e/2d092904-fe62-4a50-8dbd-fb7e07705655/20240808_113012.jpg",
  "https://images.squarespace-cdn.com/content/v1/65d43588ddcb5b7876a3823e/62632ecf-93f3-4607-9fc8-1eb05bb7a138/Screen+Shot+2024-04-09+at+8.25.09+am.png",
  "https://images.squarespace-cdn.com/content/v1/65d43588ddcb5b7876a3823e/b8605015-f644-4ae2-8161-cab392deab28/Screen+Shot+2024-04-09+at+9.09.33+am.jpg",
  "https://images.squarespace-cdn.com/content/v1/65d43588ddcb5b7876a3823e/042f7d01-ff22-4687-b16f-3a008d5346e5/Screen+Shot+2024-04-09+at+12.50.38+pm.png",
  "https://images.squarespace-cdn.com/content/v1/65d43588ddcb5b7876a3823e/e248cfff-f1ba-4e30-b92c-9ac95fe6d812/mowarry_APOV-1.jpg"
];

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Gallery"
        category="Media"
        breadcrumb="Projects"
        subtitle="Your Project, Our Great People."
      />
      <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden border border-border">
              <Image src={src} alt="18fifty3 project" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
