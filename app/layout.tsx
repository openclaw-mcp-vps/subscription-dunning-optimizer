import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dunning Optimizer — Recover Failed Subscription Payments',
  description: 'A/B test dunning email sequences and payment retry logic to maximize subscription recovery rates for SaaS companies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c7290700-810e-41e2-a554-30c323494f1f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
