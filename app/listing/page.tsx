"use client";
import Footer from "@/components/common/layout/footer";
import HeroHeader from "@/components/common/partials/HeroHeader";
import ListingFilters from "@/components/pages/listing/ListingFilters";
import PropertyItemListing from "@/components/pages/listing/PropertyItemListing";
import { useState, useMemo } from "react";
import Link from "next/link";

const fakeData = Array.from({ length: 20 }, (_, i) => {
  const priceValue = Math.floor(1200000 + Math.random() * 800000);
  return {
    id: i + 1,
    title: `Modern Villa ${i + 1}`,
    description: "Luxury 5-bedroom villa with private pool...",
    price: "$" + priceValue.toLocaleString(),
    imageUrl: `/house_${(i % 5) + 1}.jpg`,
    location: "Casablanca",
    hasVR: i % 7 === 0,
    numericPrice: priceValue, // for sorting
  };
});

const ListingPage = () => {
  const [view, setView] = useState("grid");
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [sortBy, setSortBy] = useState("default");

  // Sort the data based on sortBy option
  const sortedData = useMemo(() => {
    let data = [...fakeData];
    if (sortBy === "priceLowHigh") {
      data.sort((a, b) => a.numericPrice - b.numericPrice);
    } else if (sortBy === "priceHighLow") {
      data.sort((a, b) => b.numericPrice - a.numericPrice);
    }
    return data;
  }, [sortBy]);

  // Slice the data based on items per page
  const paginatedData = useMemo(() => {
    return sortedData.slice(0, itemsPerPage);
  }, [sortedData, itemsPerPage]);

  return (
    <div className="bg-slate-200 min-h-screen w-full pt-16 md:pt-[75px]">
      <HeroHeader title="Properties listing" image="/hero.jpg" />
      <ListingFilters
        view={view}
        setView={setView}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        sortBy={sortBy}
        setSortBy={setSortBy}
        totalResults={fakeData.length}
      />
      <div
        className={
          view === "grid"
            ? "max-w-screen-2xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "max-w-screen-2xl mx-auto px-6 py-4 flex flex-col gap-6"
        }
      >
        {paginatedData.map((item) => {
          // Create a slug from the title (e.g. "Modern Villa 1" becomes "modern-villa-1")
          const slug = item.title.replace(/\s+/g, "-").toLowerCase();
          return (
            <Link key={item.id} href={`/listing/${item.id}`}>
              <PropertyItemListing
                title={item.title}
                description={item.description}
                price={item.price}
                imageUrl={item.imageUrl}
                location={item.location}
                hasVR={item.hasVR}
              />
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ListingPage;
