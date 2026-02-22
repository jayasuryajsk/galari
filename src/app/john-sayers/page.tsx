"use client";

import PageHeader from "@/components/sections/page-header";

const paragraphs = [
  "As the Founder and Director of the 18fifty3 Group, John Sayers stands as a pillar of innovative development and Indigenous leadership. With over three decades of experience, John's remarkable career is rooted in Canberra and Southern New South Wales, where he has been at the forefront of projects that blend technical capability with practical delivery.",
  "John's journey in shaping landscapes began with transformative land development, including major expansion projects around Canberra and wider civil operations that reduced development costs through independent delivery methods.",
  "His leadership evolved from subdivision programs into major public roads and infrastructure initiatives for government, including upgrades around the Commonwealth Avenue Bridge and areas near Parliament House.",
  "The 18fifty3 Group under John's direction also managed significant civil packages at Canberra International Airport and broader development opportunities during challenging market conditions.",
  "In aviation, John was part of a consortium involved in the revival of Ansett that contributed to the establishment of Regional Express (Rex). He also owns and operates Learn 2 Fly, supporting flight training in Canberra and Bathurst, charter operations, and Indigenous aviation pathways.",
  "Today, John is steering 18fifty3 Group toward sustainability outcomes, including renewable energy and remote housing initiatives, with a continued focus on community empowerment and environmental stewardship."
];

export default function JohnSayersPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="John Sayers"
        category="Leadership"
        breadcrumb="Founder and Director"
        subtitle="Founder and Director of 18fifty3 Group with a long track record across development, civil infrastructure, aviation, and Indigenous leadership."
      />
      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-12 space-y-8">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg text-muted-foreground leading-relaxed font-medium">
            {paragraph}
          </p>
        ))}
      </section>
    </div>
  );
}
