export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          SaaS Billing Recovery
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Optimize Failed Payment<br />
          <span className="text-[#58a6ff]">Retry Sequences</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          A/B test dunning emails, timing, and Stripe retry logic to recover more subscriptions automatically — without lifting a finger.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Recovering Revenue — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Integrates with Stripe in minutes. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[['Up to 40%', 'Recovery Rate'], ['A/B Tests', 'Email Sequences'], ['Real-time', 'Analytics']].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stop losing subscribers</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Stripe webhook integration',
              'Unlimited A/B test variants',
              'Automated email sequences',
              'Smart retry timing logic',
              'Recovery analytics dashboard',
              'Slack & email alerts'
            ].map(f => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it integrate with Stripe?',
              a: 'You register a Stripe webhook endpoint we provide. We listen for payment failure events and automatically trigger your configured dunning sequences.'
            },
            {
              q: 'How do A/B tests work?',
              a: 'You define multiple email sequences and retry timings. We split failed payments across variants and track which recovers more subscriptions over time.'
            },
            {
              q: 'What happens if I cancel?',
              a: 'Your dunning sequences stop running immediately. Your Stripe account and data are unaffected — we never store payment details.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
