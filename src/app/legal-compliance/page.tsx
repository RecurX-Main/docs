import type { Metadata } from "next"
import { PageNavigation } from "@/components/page-navigation"

export const metadata: Metadata = {
  title: "14. Legal & Compliance | RecurX Documentation",
  description:
    "RecurX maintains the highest standards of legal compliance and regulatory adherence across all jurisdictions",
}

export default function LegalCompliancePage() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">14. Legal & Compliance</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-8">
          RecurX maintains the highest standards of legal compliance and regulatory adherence across all jurisdictions
          where we operate. Our commitment to compliance ensures sustainable growth, user protection, and institutional
          confidence in our platform.
        </p>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-lg p-8 border border-red-200 dark:border-red-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-red-900 dark:text-red-100">Regulatory Framework</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-6 border border-red-300 dark:border-red-700">
              <h3 className="text-lg font-semibold mb-3 text-red-900 dark:text-red-100">United States</h3>
              <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
                <li>• SEC compliance for token offerings</li>
                <li>• FinCEN registration for MSB activities</li>
                <li>• State-level money transmitter licenses</li>
                <li>• CFTC commodity regulations</li>
                <li>• IRS tax reporting requirements</li>
              </ul>
            </div>

            <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-6 border border-red-300 dark:border-red-700">
              <h3 className="text-lg font-semibold mb-3 text-red-900 dark:text-red-100">European Union</h3>
              <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
                <li>• MiCA (Markets in Crypto-Assets) compliance</li>
                <li>• GDPR data protection standards</li>
                <li>• PSD2 payment services directive</li>
                <li>• AML/CTF regulations</li>
                <li>• National licensing requirements</li>
              </ul>
            </div>

            <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-6 border border-red-300 dark:border-red-700">
              <h3 className="text-lg font-semibold mb-3 text-red-900 dark:text-red-100">Asia-Pacific</h3>
              <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
                <li>• Singapore MAS payment services</li>
                <li>• Japan FSA virtual currency regulations</li>
                <li>• Hong Kong SFC licensing</li>
                <li>• Australia AUSTRAC compliance</li>
                <li>• South Korea FATF guidelines</li>
              </ul>
            </div>

            <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-6 border border-red-300 dark:border-red-700">
              <h3 className="text-lg font-semibold mb-3 text-red-900 dark:text-red-100">Other Jurisdictions</h3>
              <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
                <li>• Canada FINTRAC regulations</li>
                <li>• UK FCA authorization</li>
                <li>• Switzerland FINMA guidelines</li>
                <li>• UAE VARA compliance</li>
                <li>• Brazil CVM regulations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100">Compliance Measures</h2>

          <div className="space-y-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
                Anti-Money Laundering (AML)
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Transaction Monitoring</h4>
                  <ul className="space-y-1 text-blue-800 dark:text-blue-200 text-sm">
                    <li>• Real-time transaction screening</li>
                    <li>• Suspicious activity reporting</li>
                    <li>• Pattern recognition algorithms</li>
                    <li>• Risk-based transaction limits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Compliance Tools</h4>
                  <ul className="space-y-1 text-blue-800 dark:text-blue-200 text-sm">
                    <li>• Chainalysis integration</li>
                    <li>• Elliptic screening</li>
                    <li>• OFAC sanctions checking</li>
                    <li>• Automated reporting systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Know Your Customer (KYC)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Individual Verification</h4>
                  <ul className="space-y-1 text-blue-800 dark:text-blue-200 text-sm">
                    <li>• Identity document verification</li>
                    <li>• Biometric authentication</li>
                    <li>• Address verification</li>
                    <li>• Source of funds checks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Business Verification</h4>
                  <ul className="space-y-1 text-blue-800 dark:text-blue-200 text-sm">
                    <li>• Corporate registration checks</li>
                    <li>• Beneficial ownership identification</li>
                    <li>• Business license verification</li>
                    <li>• Enhanced due diligence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-8 border border-green-200 dark:border-green-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-100">Data Protection & Privacy</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">GDPR Compliance</h4>
              <ul className="space-y-1 text-green-800 dark:text-green-200 text-sm">
                <li>• Data minimization principles</li>
                <li>• Right to be forgotten</li>
                <li>• Consent management</li>
                <li>• Data portability</li>
              </ul>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Security Standards</h4>
              <ul className="space-y-1 text-green-800 dark:text-green-200 text-sm">
                <li>• ISO 27001 certification</li>
                <li>• SOC 2 Type II compliance</li>
                <li>• End-to-end encryption</li>
                <li>• Zero-knowledge architecture</li>
              </ul>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Privacy by Design</h4>
              <ul className="space-y-1 text-green-800 dark:text-green-200 text-sm">
                <li>• Minimal data collection</li>
                <li>• Pseudonymization techniques</li>
                <li>• Decentralized identity options</li>
                <li>• User-controlled privacy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-purple-900 dark:text-purple-100">Legal Structure</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-300 dark:border-purple-700 text-sm">
              <thead>
                <tr className="bg-purple-100 dark:bg-purple-900/30">
                  <th className="border border-purple-300 dark:border-purple-700 p-3 text-left">Entity</th>
                  <th className="border border-purple-300 dark:border-purple-700 p-3 text-left">Jurisdiction</th>
                  <th className="border border-purple-300 dark:border-purple-700 p-3 text-left">Purpose</th>
                  <th className="border border-purple-300 dark:border-purple-700 p-3 text-left">Licenses</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-300 dark:border-purple-700 p-3 font-medium">RecurX Foundation</td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3">Switzerland</td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3">Protocol governance</td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3">FINMA registered</td>
                </tr>
                <tr className="bg-purple-50 dark:bg-purple-900/20">
                  <td className="border border-purple-300 dark:border-purple-700 p-3 font-medium">
                    RecurX Technologies Ltd
                  </td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3">Singapore</td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3">Technology development</td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3">MAS payment services</td>
                </tr>
                <tr>
                  <td className="border border-purple-300 dark:border-purple-700 p-3 font-medium">RecurX USA Inc</td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3">Delaware, USA</td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3">US operations</td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3">FinCEN MSB</td>
                </tr>
                <tr className="bg-purple-50 dark:bg-purple-900/20">
                  <td className="border border-purple-300 dark:border-purple-700 p-3 font-medium">RecurX Europe BV</td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3">Netherlands</td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3">EU operations</td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3">DNB payment institution</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-lg p-8 border border-yellow-200 dark:border-yellow-800">
          <h2 className="text-2xl font-semibold mb-6 text-yellow-900 dark:text-yellow-100">Risk Management</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-900 dark:text-yellow-100">Operational Risks</h3>
              <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                <li>• Smart contract audit requirements</li>
                <li>• Multi-signature treasury controls</li>
                <li>• Incident response procedures</li>
                <li>• Business continuity planning</li>
                <li>• Insurance coverage</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-900 dark:text-yellow-100">Regulatory Risks</h3>
              <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                <li>• Continuous regulatory monitoring</li>
                <li>• Legal counsel in key jurisdictions</li>
                <li>• Compliance officer oversight</li>
                <li>• Regular policy updates</li>
                <li>• Regulatory sandboxes participation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PageNavigation currentPath="/legal-compliance" />
    </main>
  )
}
