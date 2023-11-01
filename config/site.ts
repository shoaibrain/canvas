import { MarketingConfig } from "@/types"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "us sights",
  description:"us sights highlights",
  url: "http://localhost:3000",
  mainNav: [
    {
      title: "home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shoaib_rain",
  },
}

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "link-A",
      href: "/",
    },
    {
      title:"link-B",
      href:"/"
    },
    {
      title: "link-C",
      href:"/",
    },
    {
      title:"link-D",
      href:"/"
    }

  ],
}