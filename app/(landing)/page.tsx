import CategoriesBanner from "@/components/pages/landing/categories-banner";
import Designs from "@/components/pages/landing/designs";
import Footer from "@/components/common/layout/footer";
import Hero from "@/components/pages/landing/hero";
import Mosaic from "@/components/pages/landing/mosaic";
import ProductsGrid from "@/components/pages/landing/products-grid";
import RealEstateFeatures from "@/components/pages/landing/RealEstateFeatures";

const properties = [
  {
    title: "Oceanview Villa",
    description: "A luxurious villa with a stunning view of the Atlantic Ocean.",
    price: "7,800,000 MAD",
    imageUrl: "/house_1.jpg",
    location: "Tangier",
  },
  {
    title: "Riad Elegance",
    description: "A beautifully restored riad with a classic Moroccan design.",
    price: "3,200,000 MAD",
    imageUrl: "/house_2.jpg",
    location: "Marrakech",
  },
  {
    title: "Modern City Loft",
    description: "A modern, high-end loft in the heart of the city.",
    price: "2,400,000 MAD",
    imageUrl: "/house_3.jpg",
    location: "Casablanca",
  },
  {
    title: "Kasbah Charm",
    description: "A historic property near the heart of the old medina.",
    price: "5,000,000 MAD",
    imageUrl: "/house_4.jpg",
    location: "Chefchaouen",
  },
];

const LandingPage = () => {
  return (
    <div className="bg-slate-200 min-h-screen w-full">
      <Hero />
      <CategoriesBanner />
      <RealEstateFeatures />
      <ProductsGrid properties={properties} />
      <Designs />
      <Mosaic />
      <Footer />
    </div>
  );
};

export default LandingPage;
