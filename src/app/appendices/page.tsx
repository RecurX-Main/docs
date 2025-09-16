import type { Metadata } from "next"
import AppendicesPageClient from "./AppendicesPageClient"

export const metadata: Metadata = {
  title: "Appendices | RecurX Documentation",
  description: "Additional resources, technical specifications, and reference materials for the RecurX protocol",
}

export default function AppendicesPage() {
  return <AppendicesPageClient />
}
