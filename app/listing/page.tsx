import Footer from "@/components/common/layout/footer";
import HeroHeader from "@/components/common/partials/HeroHeader";
import ListingFilters from "@/components/pages/listing/ListingFilters";
import PropertyItemListing from "@/components/pages/listing/PropertyItemListing";

const fakeData = Array.from({ length: 20 }, (_, i) => ({
  title: `Modern Villa ${i + 1}`,
  description: "Luxury 5-bedroom villa with private pool...",
  price: "$1,200,000",
  imageUrl: `/house_${(i % 5) + 1}.jpg`,
  location: "Casablanca",
  hasVR: i % 7 === 0,
}));

const ListingPage = () => {
  return (
    <div className="bg-slate-200 min-h-screen w-full pt-16 md:pt-[75px]">
      <HeroHeader title="Properties listing" image="/hero.jpg" />
      <ListingFilters />
      <div className="max-w-screen-2xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {fakeData.map((item, index) => (
          <PropertyItemListing
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
            location={item.location}
            hasVR={item.hasVR}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ListingPage;
