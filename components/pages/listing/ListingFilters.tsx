"use client"

import React, { useState } from "react"
import { Filter, Grid, List } from "lucide-react"

const ListingFilters = () => {
  const [view, setView] = useState("grid")

  return (
    <div className="w-full bg-[#F9F1E7]">
      <div className="max-w-screen-2xl mx-auto px-6 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Group: Filter, View Toggle, Results Count */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-center">
            {/* Filter Button */}
            <button className="flex items-center justify-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
              <Filter className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-semibold text-gray-700">Filter</span>
            </button>

            {/* View Toggle */}
            <div className="flex items-center gap-3">
              <div
                onClick={() => setView("grid")}
                className={`cursor-pointer p-2 rounded-full transition-colors duration-200 ${view === "grid"
                    ? "bg-gray-200"
                    : "bg-white border border-gray-200 shadow-md hover:shadow-lg"
                  }`}
              >
                <Grid
                  className={`w-5 h-5 ${view === "grid" ? "text-black" : "text-gray-700 hover:text-black"
                    }`}
                />
              </div>
              <div
                onClick={() => setView("list")}
                className={`cursor-pointer p-2 rounded-full transition-colors duration-200 ${view === "list"
                    ? "bg-gray-200"
                    : "bg-white border border-gray-200 shadow-md hover:shadow-lg"
                  }`}
              >
                <List
                  className={`w-5 h-5 ${view === "list" ? "text-black" : "text-gray-700 hover:text-black"
                    }`}
                />
              </div>
            </div>

            {/* Results Count */}
            <span className="text-sm text-gray-600">
              Showing <strong>1–8</strong> of <strong>22</strong> results
            </span>
          </div>


          {/* Right Group: Show and Sort By */}
          <div className="flex items-center gap-6">
            {/* Show */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full shadow-md px-4 py-2">
              <label
                htmlFor="showSelect"
                className="text-sm text-gray-700 font-medium whitespace-nowrap"
              >
                Show
              </label>
              <select
                id="showSelect"
                className="bg-transparent text-sm focus:outline-none"
              >
                <option value="8">8</option>
                <option value="16" defaultValue="16">
                  16
                </option>
                <option value="24">24</option>
              </select>
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full shadow-md px-4 py-2">
              <label
                htmlFor="sortBy"
                className="text-sm text-gray-700 font-medium whitespace-nowrap"
              >
                Sort by
              </label>
              <select
                id="sortBy"
                className="bg-transparent text-sm focus:outline-none"
              >
                <option value="default">Default</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingFilters
