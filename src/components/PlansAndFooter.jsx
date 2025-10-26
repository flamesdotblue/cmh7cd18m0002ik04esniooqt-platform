import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`py-20 ${className}`}>
    <div className="max-w-6xl mx-auto px-6">{children}</div>
  </section>
);

export default function PlansAndFooter() {
  return (
    <div>
      {/* Pricing */}
      <Section id="pricing" className="bg-slate-50 dark:bg-slate-900/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Start free. Upgrade when you need more power.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Free</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Basic features, limited export</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$0</span>
              <span className="text-slate-500 dark:text-slate-400">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-slate-700 dark:text-slate-200">
              <li>• AI grammar clean-up</li>
              <li>• Noise reduction</li>
              <li>• 3 exports per month</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-slate-200 dark:border-white/15 px-5 py-3 font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition">Get Started</a>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-500 p-6 shadow-md"
          >
            <div className="absolute -top-3 right-4 rounded-full bg-emerald-500 text-white text-xs font-semibold px-3 py-1 shadow">Popular</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Pro</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Unlimited corrections, high-quality audio</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$19</span>
              <span className="text-slate-500 dark:text-slate-400">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-slate-700 dark:text-slate-200">
              <li>• Unlimited exports</li>
              <li>• Studio-grade processing</li>
              <li>• WAV/MP3 one-click export</li>
              <li>• Multi-accent & language support</li>
              <li>• Priority support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 text-white px-5 py-3 font-semibold shadow-sm hover:bg-emerald-600 transition">Upgrade to Pro</a>
          </motion.div>
        </div>
      </Section>

      {/* CTA Strip */}
      <section className="bg-emerald-800 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to sound your best?</h3>
            <p className="mt-2 text-emerald-100">Join thousands who trust Vclar for clear, professional audio.</p>
          </div>
          <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-white text-emerald-900 px-6 py-3 font-semibold shadow hover:bg-emerald-50 transition">Get Started Free</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-emerald-500" />
                <span className="text-white text-lg font-semibold">Vclar</span>
              </div>
              <p className="mt-2 text-slate-400 text-sm">AI that speaks clearly.</p>
            </div>
            <nav className="flex flex-wrap items-center gap-6 text-sm">
              <a href="#" className="hover:text-white">About</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Contact</a>
            </nav>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} Vclar Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
