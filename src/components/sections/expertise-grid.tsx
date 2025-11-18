import Image from "next/image";

interface ExpertiseItem {
  title: string;
  imageUrl: string;
  link: string;
}

const expertiseData: ExpertiseItem[] = [
  {
    title: "Water & Wastewater Infrastructure",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/63c7bdbd-d00c-44be-ae06-2dd50a81e08a-7.jpg",
    link: "https://vaughancivil.com.au/expertise/water-wastewater-infrastructure/",
  },
  {
    title: "Defence",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/istockphoto-1562427585-612x612-1-8.jpg",
    link: "https://vaughancivil.com.au/expertise/defence/",
  },
  {
    title: "Civil & Rail Infrastructure",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/IMEX-Container-Beams-9.jpg",
    link: "https://vaughancivil.com.au/expertise/civil-infrastructure/",
  },
  {
    title: "Airports",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/SYD-AIR-Aerial-10.jpg",
    link: "https://vaughancivil.com.au/expertise/airports/",
  },
  {
    title: "Electrical Infrastructure",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/Cover-Photo_Electrical-Infrastructure-11.jpg",
    link: "https://vaughancivil.com.au/expertise/electrical-infrastructure/",
  },
  {
    title: "Gas & Fuel Infrastructure",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/block-12.png",
    link: "https://vaughancivil.com.au/expertise/gas-fuel-infrastructure/",
  },
];

const ExpertiseCard = ({ item }: { item: ExpertiseItem }) => (
  <a href={item.link} className="group relative block aspect-[4/3] min-h-[300px] cursor-pointer overflow-hidden rounded-lg">
    <Image
      src={item.imageUrl}
      alt={item.title}
      fill
      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      sizes="(max-width: 767px) 100vw, 50vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.2)] transition-colors duration-300 group-hover:from-[rgba(0,0,0,0.5)]"></div>
    <div className="relative z-10 flex h-full items-end p-8">
      <h3 className="text-2xl font-semibold leading-tight text-white md:text-[28px]">
        {item.title}
      </h3>
    </div>
  </a>
);

const ExpertiseGrid = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-12 md:py-20 lg:px-10 xl:px-0">
        <h2 className="mb-12 text-center text-[32px] font-bold text-primary md:text-4xl lg:text-[48px]">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {expertiseData.map((item) => (
            <ExpertiseCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;