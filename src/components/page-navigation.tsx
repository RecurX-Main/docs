"use client"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { title: "Welcome", url: "/" },
  { title: "Abstract", url: "/abstract" },
  { title: "01. Introduction", url: "/introduction" },
  { title: "02. Vision & Mission", url: "/vision-mission" },
  { title: "03. Market Analysis", url: "/market-analysis" },
  { title: "04. Problem", url: "/problem" },
  { title: "05. Solution", url: "/solution" },
  { title: "06. Technology Overview", url: "/technology-overview" },
  { title: "07. Testnet Deployment & Developer Infrastructure", url: "/testnet-deployment" },
  { title: "08. Use Cases", url: "/use-cases" },
  { title: "09. RecurX Token (RCX)", url: "/recurx-token" },
  { title: "10. Token Value Accrual & Stability Mechanisms", url: "/token-value-accrual" },
  { title: "11. Ecosystem & Partnerships", url: "/ecosystem-partnerships" },
  { title: "12. Community & Governance", url: "/community-governance" },
  { title: "13. Roadmap", url: "/roadmap" },
  { title: "15. Legal & Compliance", url: "/legal-compliance" },
  { title: "Conclusion", url: "/conclusion" },
  { title: "Appendices", url: "/appendices" },
]

interface PageNavigationProps {
  currentPath: string
}

export function PageNavigation({ currentPath }: PageNavigationProps) {
  const currentIndex = navItems.findIndex((item) => item.url === currentPath)
  const previousPage = currentIndex > 0 ? navItems[currentIndex - 1] : null
  const nextPage = currentIndex < navItems.length - 1 ? navItems[currentIndex + 1] : null

  return (
    <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center pt-6 sm:pt-8 mt-6 sm:mt-8 border-t gap-4 sm:gap-0">
      <div className="flex-1 order-2 sm:order-1">
        {previousPage && (
          <Button variant="outline" asChild className="group bg-transparent w-full sm:w-auto justify-start">
            <Link href={previousPage.url} className="flex items-center gap-2 p-3 sm:p-4">
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 flex-shrink-0" />
              <div className="text-left min-w-0">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="font-medium truncate text-sm sm:text-base">{previousPage.title}</div>
              </div>
            </Link>
          </Button>
        )}
      </div>

      <div className="flex-1 flex justify-end order-1 sm:order-2">
        {nextPage && (
          <Button variant="outline" asChild className="group bg-transparent w-full sm:w-auto justify-end">
            <Link href={nextPage.url} className="flex items-center gap-2 p-3 sm:p-4">
              <div className="text-right min-w-0">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="font-medium truncate text-sm sm:text-base">{nextPage.title}</div>
              </div>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
