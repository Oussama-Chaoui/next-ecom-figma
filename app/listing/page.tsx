import Footer from "@/components/common/layout/footer"
import HeroHeader from "@/components/common/partials/HeroHeader"
import ListingFilters from "@/components/pages/listing/ListingFilters"

const ListingPage = () => {
  return (
    <div className="bg-slate-200 min-h-screen w-full pt-16 md:pt-[100px]">
      <HeroHeader title="Shop" image="/hero.jpg" />
      <ListingFilters />
      <Footer />
      <h2 className="text-xl font-semibold">Listings</h2>
    </div>
  )
}

export default ListingPage
