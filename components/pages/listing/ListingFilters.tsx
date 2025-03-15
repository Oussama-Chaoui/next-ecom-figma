"use client";
import React from "react";
import { Filter, Grid, List, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/components/lib/utils/twMerge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ListingFiltersProps {
  view: string;
  setView: (view: string) => void;
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  totalResults: number;
}

const ListingFilters = ({
  view,
  setView,
  itemsPerPage,
  setItemsPerPage,
  sortBy,
  setSortBy,
  totalResults,
}: ListingFiltersProps) => {
  const itemsPerPageOptions = [8, 16, 24];
  const sortByOptions = [
    { value: "default", label: "Default" },
    { value: "priceLowHigh", label: "Price: Low to High" },
    { value: "priceHighLow", label: "Price: High to Low" },
  ];

  return (
    <div className="w-full bg-[#FAF3EA] backdrop-blur-sm border-b border-[#B88E2F]/10">
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
              className="flex items-center gap-2 px-6 py-3 bg-primarySite  border border-primarySite/20 rounded-xl hover:bg-primarySite/20 transition-all"
            >
              <Filter className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white">
                Filters
              </span>
            </motion.button>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-gray-100 shadow-sm">
              {["grid", "list"].map((viewType) => (
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
                  {viewType === "grid" ? (
                    <Grid className="w-5 h-5" />
                  ) : (
                    <List className="w-5 h-5" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-primarySite">
                {itemsPerPage}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-700">
                {totalResults}
              </span>{" "}
              properties
            </div>
          </div>

          {/* Right Group */}
          <div className="flex items-center gap-4">
            {/* Show Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 bg-white pl-4 pr-3 py-2.5 rounded-xl border border-gray-100 shadow-sm hover:border-primarySite/20 transition-colors cursor-pointer">
                  <label className="text-sm text-gray-600 font-medium">
                    Show
                  </label>
                  <button className="flex items-center gap-1 focus:outline-none">
                    <span className="text-sm text-gray-800">
                      {itemsPerPage}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500 transition-transform" />
                  </button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-24">
                {itemsPerPageOptions.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setItemsPerPage(option)}
                    className="flex items-center justify-between"
                  >
                    {option}
                    {itemsPerPage === option && (
                      <span className="text-primarySite">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sort By Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 bg-white pl-4 pr-3 py-2.5 rounded-xl border border-gray-100 shadow-sm hover:border-primarySite/20 transition-colors cursor-pointer">
                  <label className="text-sm text-gray-600 font-medium">
                    Sort by
                  </label>
                  <button className="flex items-center gap-1 focus:outline-none">
                    <span className="text-sm text-gray-800">
                      {sortByOptions.find((opt) => opt.value === sortBy)?.label}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500 transition-transform" />
                  </button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {sortByOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className="flex items-center justify-between"
                  >
                    {option.label}
                    {sortBy === option.value && (
                      <span className="text-primarySite">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ListingFilters;
