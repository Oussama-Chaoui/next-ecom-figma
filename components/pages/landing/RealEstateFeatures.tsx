"use client";
import { cn } from "@/components/lib/utils/twMerge";
import { Poppins } from "next/font/google";
import { Home, ShieldCheck, PiggyBank, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const features = [
  {
    icon: <Home size={56} className="text-primarySite" />,
    title: "Luxury Properties",
    description: "Exquisite homes designed for elegance",
  },
  {
    icon: <ShieldCheck size={56} className="text-primarySite" />,
    title: "Trusted Agents",
    description: "Certified real estate professionals",
  },
  {
    icon: <PiggyBank size={56} className="text-primarySite" />,
    title: "Smart Investments",
    description: "High ROI opportunities",
  },
  {
    icon: <Headphones size={56} className="text-primarySite" />,
    title: "24/7 Support",
    description: "Dedicated assistance",
  },
];

const RealEstateFeatures = () => {
  return (
    <section className="bg-[#FAF3EA] py-24">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Floating Icon */}
              <motion.div
                className="flex justify-center mb-8"
                whileHover={{ y: -8 }}
              >
                <div className="p-2 bg-primarySite/5 rounded-full border border-primarySite/10">
                  {feature.icon}
                </div>
              </motion.div>

              {/* Text Reveal */}
              <div className="text-center space-y-3">
                <h3 className={cn(
                  poppins.className,
                  "text-2xl font-bold text-primarySite",
                  "relative before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2",
                  "before:w-0 before:h-[2px] before:bg-primarySite",
                  "group-hover:before:w-16 before:transition-all before:duration-500"
                )}>
                  {feature.title}
                </h3>
                <p className={cn(
                  poppins.className,
                  "text-gray-600 text-sm tracking-wide",
                  "transform transition-all duration-500",
                  "group-hover:translate-x-1 group-hover:opacity-100"
                )}>
                  {feature.description}
                </p>
              </div>

              {/* Hidden Glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primarySite/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstateFeatures;