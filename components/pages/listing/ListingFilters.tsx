"use client"
import React, { useState } from "react"
import { Filter, Grid, List, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/components/lib/utils/twMerge"

const ListingFilters = () => {
  const [view, setView] = useState("grid")
  const [showCount] = useState(8)
  const totalResults = 22

  return (
    <div className="w-full bg-white/80 backdrop-blur-sm border-b border-[#B88E2F]/10">
      <div className="max-w-screen-2xl mx-auto px-6 py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left Group */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-center">
            {/* Filter Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-primarySite/10 border border-primarySite/20 rounded-xl hover:bg-primarySite/20 transition-all"
            >
              <Filter className="w-5 h-5 text-primarySite" />
              <span className="text-sm font-semibold text-primarySite">Filters</span>
            </motion.button>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-gray-100 shadow-sm">
              {['grid', 'list'].map((viewType) => (
                <motion.div
                  key={viewType}
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "p-2.5 rounded-lg cursor-pointer transition-colors",
                    view === viewType
                      ? "bg-primarySite text-white"
                      : "hover:bg-gray-50"
                  )}
                  onClick={() => setView(viewType)}
                >
                  {viewType === 'grid' ? (
                    <Grid className="w-5 h-5" />
                  ) : (
                    <List className="w-5 h-5" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-500">
              Showing <span className="font-semibold text-primarySite">{showCount}</span> of{" "}
              <span className="font-semibold text-gray-700">{totalResults}</span> properties
            </div>
          </div>

          {/* Right Group */}
          <div className="flex items-center gap-4">
            {['Show', 'Sort by'].map((filterType) => (
              <motion.div
                key={filterType}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <div className="flex items-center gap-2 bg-white pl-4 pr-3 py-2.5 rounded-xl border border-gray-100 shadow-sm hover:border-primarySite/20 transition-colors">
                  <label className="text-sm text-gray-600 font-medium">
                    {filterType}
                  </label>
                  <select
                    className="bg-transparent text-sm text-gray-800 focus:outline-none appearance-none pr-5"
                  >
                    {filterType === 'Show' ? (
                      <>
                        <option value="8">8</option>
                        <option value="16">16</option>
                        <option value="24">24</option>
                      </>
                    ) : (
                      <>
                        <option value="default">Default</option>
                        <option value="priceLowHigh">Price: Low to High</option>
                        <option value="priceHighLow">Price: High to Low</option>
                      </>
                    )}
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-primarySite transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ListingFilters