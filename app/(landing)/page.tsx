import CategoriesBanner from "@/components/landing/categories-banner"
import Designs from "@/components/landing/designs"
import Hero from "@/components/landing/hero"
import ProductsGrid from "@/components/landing/products-grid"

const LandingPage = () => {
  return (
    <div className="bg-slate-200 min-h-screen w-full">
      <Hero />
      <CategoriesBanner />
      <ProductsGrid />
      <Designs/>
    </div>
  )
}

export default LandingPage