import CategoriesBanner from "@/components/pages/landing/categories-banner"
import Designs from "@/components/pages/landing/designs"
import Footer from "@/components/common/layout/footer"
import Hero from "@/components/pages/landing/hero"
import Mosaic from "@/components/pages/landing/mosaic"
import ProductsGrid from "@/components/pages/landing/products-grid"
import RealEstateFeatures from "@/components/pages/landing/RealEstateFeatures"

const LandingPage = () => {
  return (
    <div className="bg-slate-200 min-h-screen w-full">
      <Hero />
      <CategoriesBanner />
      <RealEstateFeatures />
      <ProductsGrid />
      <Designs />
      <Mosaic />
      <Footer />
    </div>
  )
}

export default LandingPage
