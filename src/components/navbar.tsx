"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { SearchDialog } from "@/components/search-dialog"
import * as React from "react"

export function Navbar() {
  const [searchOpen, setSearchOpen] = React.useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
        <div className="flex h-14 items-center px-3 sm:px-4 lg:px-6">
          <SidebarTrigger className="mr-2 sm:mr-4" />

          <div className="flex-1 sm:hidden">
            <h1 className="text-sm font-semibold text-gray-900 dark:text-gray-100">RecurX Docs</h1>
          </div>

          <div className="hidden sm:flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Label htmlFor="search" className="sr-only">
                  Search documentation
                </Label>
                <Input
                  id="search"
                  placeholder="Search documentation..."
                  className="h-9 w-full md:w-[300px] lg:w-[400px] pl-9 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 cursor-pointer"
                  onClick={() => setSearchOpen(true)}
                  readOnly
                />
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 select-none text-gray-400" />
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 select-none">
                  <kbd className="inline-flex h-5 max-h-full items-center rounded border border-border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>
            <ThemeProvider />
          </div>

          <div className="flex items-center space-x-2 sm:hidden">
            <Button variant="ghost" size="sm" onClick={() => setSearchOpen(true)}>
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <ThemeProvider />
          </div>
        </div>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
