import { cn } from "@/components/lib/utils/twMerge"
import { Poppins } from "next/font/google"
import { Home, ShieldCheck, PiggyBank, Headphones } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const RealEstateFeatures = () => {
  return (
    <section className="bg-[#FAF3EA] py-16">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-12">
          {/* Feature 1 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <Home size={60} className="text-gray-700 flex-shrink-0" />
            <div className="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
              <h3 className={cn(poppins.className, "font-semibold text-xl")}>
                Luxury Properties
              </h3>
              <p className={cn(poppins.className, "text-gray-700 text-base mt-1")}>
                Exquisite Homes
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <ShieldCheck size={60} className="text-gray-700 flex-shrink-0" />
            <div className="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
              <h3 className={cn(poppins.className, "font-semibold text-xl")}>
                Trusted Agents
              </h3>
              <p className={cn(poppins.className, "text-gray-700 text-base mt-1")}>
                Expert Advice
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <PiggyBank size={60} className="text-gray-700 flex-shrink-0" />
            <div className="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
              <h3 className={cn(poppins.className, "font-semibold text-xl")}>
                Smart Investments
              </h3>
              <p className={cn(poppins.className, "text-gray-700 text-base mt-1")}>
                High ROI
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <Headphones size={60} className="text-gray-700 flex-shrink-0" />
            <div className="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
              <h3 className={cn(poppins.className, "font-semibold text-xl")}>
                24/7 Support
              </h3>
              <p className={cn(poppins.className, "text-gray-700 text-base mt-1")}>
                Always Here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RealEstateFeatures
