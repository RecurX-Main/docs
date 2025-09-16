"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import type { DialogProps } from "@radix-ui/react-dialog"
import {
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
  Home,
} from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

const searchablePages = [
  {
    title: "Welcome",
    url: "/",
    icon: Home,
    section: "Overview",
    description: "Welcome to RecurX documentation - your comprehensive guide to the RecurX ecosystem",
    keywords: ["welcome", "home", "start", "introduction", "overview"],
  },
  {
    title: "Abstract",
    url: "/abstract",
    icon: FileText,
    section: "Overview",
    description: "Executive summary and abstract of the RecurX project",
    keywords: ["abstract", "summary", "executive", "overview", "brief"],
  },
  {
    title: "Introduction",
    url: "/introduction",
    icon: BookOpen,
    section: "Foundation",
    description: "Introduction to RecurX and its core concepts",
    keywords: ["introduction", "intro", "basics", "fundamentals", "getting started"],
  },
  {
    title: "Vision & Mission",
    url: "/vision-mission",
    icon: Target,
    section: "Foundation",
    description: "RecurX vision, mission, and long-term goals",
    keywords: ["vision", "mission", "goals", "objectives", "purpose", "future"],
  },
  {
    title: "Market Analysis",
    url: "/market-analysis",
    icon: TrendingUp,
    section: "Foundation",
    description: "Market analysis and competitive landscape",
    keywords: ["market", "analysis", "competition", "landscape", "trends", "research"],
  },
  {
    title: "Problem",
    url: "/problem",
    icon: AlertTriangle,
    section: "Core Concepts",
    description: "The problem RecurX aims to solve",
    keywords: ["problem", "issue", "challenge", "pain point", "difficulty"],
  },
  {
    title: "Solution",
    url: "/solution",
    icon: CheckCircle,
    section: "Core Concepts",
    description: "RecurX solution and approach",
    keywords: ["solution", "approach", "fix", "resolve", "answer", "method"],
  },
  {
    title: "Technology Overview",
    url: "/technology-overview",
    icon: Cpu,
    section: "Core Concepts",
    description: "Technical overview and architecture",
    keywords: ["technology", "tech", "architecture", "technical", "system", "infrastructure"],
  },
  {
    title: "Testnet & Infrastructure",
    url: "/testnet-deployment",
    icon: Cloud,
    section: "Implementation",
    description: "Testnet deployment and infrastructure details",
    keywords: ["testnet", "infrastructure", "deployment", "network", "testing", "development"],
  },
  {
    title: "Use Cases",
    url: "/use-cases",
    icon: Layers,
    section: "Implementation",
    description: "Real-world use cases and applications",
    keywords: ["use cases", "applications", "examples", "scenarios", "implementation"],
  },
  {
    title: "RecurX Token (RCX)",
    url: "/recurx-token",
    icon: Coins,
    section: "Tokenomics",
    description: "RecurX token details and specifications",
    keywords: ["token", "rcx", "recurx token", "cryptocurrency", "coin", "tokenomics"],
  },
  {
    title: "Token Value & Stability",
    url: "/token-value-accrual",
    icon: BarChart3,
    section: "Tokenomics",
    description: "Token value accrual and stability mechanisms",
    keywords: ["value", "stability", "accrual", "economics", "price", "valuation"],
  },
  {
    title: "Partnerships",
    url: "/ecosystem-partnerships",
    icon: Users,
    section: "Ecosystem",
    description: "Ecosystem partnerships and collaborations",
    keywords: ["partnerships", "ecosystem", "collaborations", "alliances", "partners"],
  },
  {
    title: "Governance",
    url: "/community-governance",
    icon: GitBranch,
    section: "Ecosystem",
    description: "Community governance and decision-making",
    keywords: ["governance", "community", "voting", "decisions", "dao", "decentralized"],
  },
  {
    title: "Roadmap",
    url: "/roadmap",
    icon: MapPin,
    section: "Ecosystem",
    description: "Project roadmap and future milestones",
    keywords: ["roadmap", "timeline", "milestones", "future", "plans", "development"],
  },
  {
    title: "Legal & Compliance",
    url: "/legal-compliance",
    icon: Shield,
    section: "Resources",
    description: "Legal framework and compliance information",
    keywords: ["legal", "compliance", "regulations", "law", "regulatory", "framework"],
  },
  {
    title: "Conclusion",
    url: "/conclusion",
    icon: Flag,
    section: "Resources",
    description: "Project conclusion and final thoughts",
    keywords: ["conclusion", "summary", "final", "end", "closing", "wrap up"],
  },
  {
    title: "Appendices",
    url: "/appendices",
    icon: Archive,
    section: "Resources",
    description: "Additional resources and appendices",
    keywords: ["appendices", "resources", "additional", "extra", "supplementary"],
  },
]

interface SearchDialogProps extends DialogProps {
  onOpenChange?: (open: boolean) => void
}

export function SearchDialog({ onOpenChange, ...props }: SearchDialogProps) {
  const router = useRouter()
  const [query, setQuery] = React.useState("")

  const filteredPages = React.useMemo(() => {
    if (!query) return searchablePages

    const searchTerm = query.toLowerCase()
    return searchablePages.filter((page) => {
      return (
        page.title.toLowerCase().includes(searchTerm) ||
        page.description.toLowerCase().includes(searchTerm) ||
        page.section.toLowerCase().includes(searchTerm) ||
        page.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm))
      )
    })
  }, [query])

  const groupedResults = React.useMemo(() => {
    const groups: Record<string, typeof searchablePages> = {}
    filteredPages.forEach((page) => {
      if (!groups[page.section]) {
        groups[page.section] = []
      }
      groups[page.section].push(page)
    })
    return groups
  }, [filteredPages])

  const handleSelect = React.useCallback(
    (url: string) => {
      router.push(url)
      onOpenChange?.(false)
    },
    [router, onOpenChange],
  )

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange?.(true)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [onOpenChange])

  return (
    <CommandDialog {...props} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search documentation..." value={query} onValueChange={setQuery} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {Object.entries(groupedResults).map(([section, pages]) => (
          <CommandGroup key={section} heading={section}>
            {pages.map((page) => {
              const Icon = page.icon
              return (
                <CommandItem
                  key={page.url}
                  value={`${page.title} ${page.description} ${page.keywords.join(" ")}`}
                  onSelect={() => handleSelect(page.url)}
                  className="flex items-center gap-2 px-2 py-2"
                >
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <div className="flex flex-col">
                    <span className="font-medium">{page.title}</span>
                    <span className="text-xs text-muted-foreground line-clamp-1">{page.description}</span>
                  </div>
                </CommandItem>
              )
            })}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
