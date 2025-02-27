"use client"

import React from "react"
import LinkItem from "./LinkItem"

interface BreadcrumbLink {
  name: string
  href: string
}

interface CustomBreadcrumbsProps {
  links: BreadcrumbLink[]
  action?: React.ReactNode
  heading?: string
  moreLink?: string[]
  className?: string
}

const CustomBreadcrumbs = ({
  links,
  action,
  heading,
  moreLink,
  className,
  ...other
}: CustomBreadcrumbsProps) => {
  const lastLink = links.length > 0 ? links[links.length - 1].href : ""

  return (
    <div className={`mb-5 ${className || ""}`} {...other}>
      <div className="flex items-center">
        <div className="flex-grow">
          {heading && (
            <h4 className="mb-2 text-2xl font-bold">{heading}</h4>
          )}

          {links.length > 0 && (
            <nav className="flex items-center space-x-2" aria-label="Breadcrumb">
              {links.map((link, index) => (
                <React.Fragment key={link.name}>
                  <LinkItem
                    link={link}
                    disabled={link.href === lastLink}
                  />
                  {index < links.length - 1 && (
                    <span className="text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>

        {action && <div className="flex-shrink-0">{action}</div>}
      </div>

      {moreLink && (
        <div className="mt-2">
          {moreLink.map((href) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block truncate text-sm text-blue-500"
            >
              {href}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomBreadcrumbs
