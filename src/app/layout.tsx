import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "RecurX Documentation",
  description: "Complete documentation for the RecurX decentralized payment protocol",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
         <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="recurx-theme"
        >
          <SidebarProvider>
            <AppSidebar />
            <div className="flex-1 flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">{children}</main>
            </div>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
