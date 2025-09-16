"use client"

import { PageNavigation } from "@/components/page-navigation"

export default function AppendicesPageClient() {
  return (
    <main className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-6 text-4xl font-bold text-balance">Appendices</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-8">
          This section provides additional resources, technical specifications, and reference materials to support
          developers, researchers, and stakeholders working with the RecurX protocol.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100">
            Appendix A: Technical Specifications
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Smart Contract Addresses</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-blue-300 dark:border-blue-700 text-sm">
                  <thead>
                    <tr className="bg-blue-200 dark:bg-blue-800">
                      <th className="border border-blue-300 dark:border-blue-700 p-2 text-left">Contract</th>
                      <th className="border border-blue-300 dark:border-blue-700 p-2 text-left">Network</th>
                      <th className="border border-blue-300 dark:border-blue-700 p-2 text-left">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-300 dark:border-blue-700 p-2">RCX Token</td>
                      <td className="border border-blue-300 dark:border-blue-700 p-2">BSC</td>
                      <td className="border border-blue-300 dark:border-blue-700 p-2 font-mono text-xs">
                        0x1234...abcd
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 dark:border-blue-700 p-2">Payment Gateway</td>
                      <td className="border border-blue-300 dark:border-blue-700 p-2">BSC</td>
                      <td className="border border-blue-300 dark:border-blue-700 p-2 font-mono text-xs">
                        0x5678...efgh
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 dark:border-blue-700 p-2">Staking Contract</td>
                      <td className="border border-blue-300 dark:border-blue-700 p-2">BSC</td>
                      <td className="border border-blue-300 dark:border-blue-700 p-2 font-mono text-xs">
                        0x9abc...ijkl
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">API Endpoints</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Base URL</h4>
                  <code className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded text-sm">
                    https://api.recurx.io/v1
                  </code>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Testnet URL</h4>
                  <code className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded text-sm">
                    https://testnet-api.recurx.io/v1
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-8 border border-green-200 dark:border-green-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-100">
            Appendix B: Supported Assets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6 border border-green-300 dark:border-green-700">
              <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">Major Cryptocurrencies</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-green-800 dark:text-green-200">
                {/* <div>• Bitcoin (BTC)</div> */}
                <div>• Ethereum (ETH)</div>
                <div>• BNB (BNB)</div>
                <div>• Solana (SOL)</div>
                <div>• Cardano (ADA)</div>
                <div>• Polygon (MATIC)</div>
                <div>• Avalanche (AVAX)</div>
                <div>• Chainlink (LINK)</div>
              </div>
            </div>

            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6 border border-green-300 dark:border-green-700">
              <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">Stablecoins</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-green-800 dark:text-green-200">
                <div>• USDT</div>
                <div>• USDC</div>
                {/* <div>• BUSD</div> */}
                <div>• DAI</div>
                <div>• FRAX</div>
                <div>• TUSD</div>
                <div>• USDP</div>
                <div>• LUSD</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-purple-900 dark:text-purple-100">
            Appendix C: Integration Examples
          </h2>

          <div className="space-y-6">
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6 border border-purple-300 dark:border-purple-700">
              <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">React Integration</h3>
              <pre className="bg-purple-200 dark:bg-purple-800 p-4 rounded text-sm overflow-x-auto">
                <code>{`import { RecurXProvider, useRecurX } from '@recurx/react-sdk';

function App() {
  return (
    <RecurXProvider apiKey="your-api-key">
      <PaymentComponent />
    </RecurXProvider>
  );
}

function PaymentComponent() {
  const { createPayment } = useRecurX();
  
  const handlePayment = async () => {
    const payment = await createPayment({
      amount: '100',
      currency: 'USDC',
      recipient: '0x...'
    });
  };
  
  return <button onClick={handlePayment}>Pay with Crypto</button>;
}`}</code>
              </pre>
            </div>

            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6 border border-purple-300 dark:border-purple-700">
              <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">Node.js Backend</h3>
              <pre className="bg-purple-200 dark:bg-purple-800 p-4 rounded text-sm overflow-x-auto">
                <code>{`const RecurX = require('@recurx/node-sdk');

const client = new RecurX({
  apiKey: process.env.RECURX_API_KEY,
  environment: 'production'
});

// Create a payment
app.post('/create-payment', async (req, res) => {
  try {
    const payment = await client.payments.create({
      amount: req.body.amount,
      currency: req.body.currency,
      recipient: req.body.recipient,
      metadata: {
        orderId: req.body.orderId
      }
    });
    
    res.json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg p-8 border border-orange-200 dark:border-orange-800 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-orange-900 dark:text-orange-100">Appendix D: Glossary</h2>

          <div className="space-y-4">
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-300 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Cross-Chain</h4>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                The ability to transfer assets or data between different blockchain networks.
              </p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-300 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                DIS (Decentralized Identity System)
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                RecurX's optional identity verification system that enhances trust without compromising privacy.
              </p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-300 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Liquidity Aggregation</h4>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                The process of combining liquidity from multiple sources to ensure optimal pricing and minimal slippage.
              </p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-300 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">RCX Token</h4>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                The native utility token of the RecurX protocol, used for routing, staking, governance, and fee
                discounts.
              </p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-300 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Smart Routing</h4>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                Automated pathfinding algorithm that determines the most efficient route for token swaps and payments.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-lg p-8 border border-yellow-200 dark:border-yellow-800">
          <h2 className="text-2xl font-semibold mb-6 text-yellow-900 dark:text-yellow-100">
            Appendix E: Resources & Links
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-900 dark:text-yellow-100">Official Links</h3>
              <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                <li>• Website: https://recurx.xyz</li>
                {/* <li>• Documentation: https://docs.recurx.io</li> */}
                <li>• GitHub: https://github.com/recurx-main</li>
                {/* <li>• API Reference: https://api.recurx.io/docs</li> */}
                <li>• Status Page: https://recurx.xyz</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-900 dark:text-yellow-100">Community</h3>
              <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                {/* <li>• Discord: https://discord.gg/recurx</li> */}
                <li>• Telegram: https://t.me/Recurx</li>
                <li>• Twitter: https://twitter.com/RecurXPay</li>
                {/* <li>• Medium: https://medium.com/@recurx</li>
                <li>• Reddit: https://reddit.com/r/recurx</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PageNavigation currentPath="/appendices" />
    </main>
  )
}
