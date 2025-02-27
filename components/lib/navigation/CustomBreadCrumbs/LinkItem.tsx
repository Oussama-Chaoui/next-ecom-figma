"use client"

import NextLink from "next/link"
import React from "react"
import { cn } from "../../utils/twMerge"

export interface BreadcrumbsLinkProps {
  name: string
  href?: string
  icon?: React.ReactNode
}

type Props = {
  link: BreadcrumbsLinkProps
  disabled: boolean
}

const LinkItem = ({ link, disabled }: Props) => {
  const { name, href, icon } = link
  const baseClasses = "inline-flex items-center text-sm"
  const enabledClasses = "font-semibold text-gray-900 hover:font-bold"
  const disabledClasses = "font-light text-black font-medium"

  const classes = cn(baseClasses, disabled ? disabledClasses : enabledClasses)

  const renderContent = (
    <>
      {icon && (
        <span className="mr-1 inline-flex items-center">
          <span className="w-5 h-5">{icon}</span>
        </span>
      )}
      {name}
    </>
  )

  if (href && !disabled) {
    return (
      <NextLink href={href} className={classes}>
        {renderContent}
      </NextLink>
    )
  }

  return <span className={classes}>{renderContent}</span>
}

export default LinkItem
