"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  GalleryVerticalEnd,
  Home,
  FileText,
  BookOpen,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Cpu,
  Cloud,
  Layers,
  Coins,
  BarChart3,
  Users,
  GitBranch,
  MapPin,
  Shield,
  Flag,
  Archive,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar"

const navSections = [
  {
    title: "Overview",
    items: [
      { title: "Welcome", url: "/", icon: Home },
      { title: "Abstract", url: "/abstract", icon: FileText },
    ],
  },
  {
    title: "Foundation",
    items: [
      { title: "Introduction", url: "/introduction", icon: BookOpen },
      { title: "Vision & Mission", url: "/vision-mission", icon: Target },
      { title: "Market Analysis", url: "/market-analysis", icon: TrendingUp },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Problem", url: "/problem", icon: AlertTriangle },
      { title: "Solution", url: "/solution", icon: CheckCircle },
      { title: "Technology Overview", url: "/technology-overview", icon: Cpu },
    ],
  },
  {
    title: "Implementation",
    items: [
      { title: "Testnet & Infrastructure", url: "/testnet-deployment", icon: Cloud },
      { title: "Use Cases", url: "/use-cases", icon: Layers },
    ],
  },
  {
    title: "Tokenomics",
    items: [
      { title: "RecurX Token (RCX)", url: "/recurx-token", icon: Coins },
      { title: "Token Value & Stability", url: "/token-value-accrual", icon: BarChart3 },
    ],
  },
  {
    title: "Ecosystem",
    items: [
      { title: "Partnerships", url: "/ecosystem-partnerships", icon: Users },
      { title: "Governance", url: "/community-governance", icon: GitBranch },
      { title: "Roadmap", url: "/roadmap", icon: MapPin },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Legal & Compliance", url: "/legal-compliance", icon: Shield },
      { title: "Conclusion", url: "/conclusion", icon: Flag },
      { title: "Appendices", url: "/appendices", icon: Archive },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar className="border-r border-border/20 bg-white dark:bg-gray-950">
      <SidebarHeader className="border-b border-border/10 px-4 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md">
              <Link href="/">
                <div className="bg-blue-600 text-white flex aspect-square size-8 items-center justify-center rounded-md">
                  <img  className="size-4" />
                </div>
                {!isCollapsed && (
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold text-gray-900 dark:text-gray-100">RecurX</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Documentation</span>
                  </div>
                )}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-2 py-2">
        {navSections.map((section) => (
          <SidebarGroup key={section.title} className="mb-4">
            {!isCollapsed && (
              <SidebarGroupLabel className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide px-2 py-1 mb-1">
                {section.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu className="space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.url
                  return (
                    <SidebarMenuItem key={item.url}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className={`
                          group relative rounded-md transition-colors duration-150 h-8
                          ${
                            isActive
                              ? "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300"
                              : "hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300"
                          }
                          ${isCollapsed ? "justify-center px-2" : "px-2"}
                        `}
                        tooltip={isCollapsed ? item.title : undefined}
                      >
                        <Link
                          href={item.url}
                          className={`flex items-center w-full ${isCollapsed ? "justify-center" : "gap-2"}`}
                        >
                          <Icon
                            className={`size-4 flex-shrink-0 ${
                              isActive
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                            }`}
                          />
                          {!isCollapsed && <span className="text-sm font-normal truncate">{item.title}</span>}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-border/10 p-3">
        <div className="text-center py-2">
          {isCollapsed ? (
            <div className="text-xs font-medium text-blue-600 dark:text-blue-400">R</div>
          ) : (
            <>
              <div className="text-xs text-gray-500 dark:text-gray-400">Powered by</div>
              <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">RecurX</div>
            </>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
