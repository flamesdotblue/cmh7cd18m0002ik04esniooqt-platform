import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Wand2, Download, CheckCircle2, Volume2, Sparkles, Languages } from 'lucide-react';

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 }
};

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`py-20 ${className}`}>
    <div className="max-w-6xl mx-auto px-6">{children}</div>
  </section>
);

export default function InfoSections() {
  return (
    <div>
      {/* How It Works */}
      <Section id="how-it-works" className="bg-white dark:bg-slate-950">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">From rough note to polished audio in three simple steps.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Mic, title: 'Record your voice note', desc: 'Capture your thoughts naturally — no script needed.' },
            { icon: Wand2, title: 'Vclar removes noise & fixes grammar', desc: 'AI enhances clarity, removes noise, and corrects grammar.' },
            { icon: Download, title: 'Download studio-quality output', desc: 'Export high-quality WAV/MP3 with one click.' }
          ].map((step, idx) => (
            <motion.div
              key={step.title}
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <step.icon />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
              </div>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Key Features */}
      <Section id="features" className="bg-slate-50 dark:bg-slate-900/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Key Features</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Tools that make you sound your best.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Sparkles,
              title: 'Clean Grammar with AI',
              desc: 'Powered by GPT-like language models to correct grammar and phrasing naturally.'
            },
            {
              icon: Volume2,
              title: 'Noise-Free Audio Output',
              desc: 'Removes background noise and enhances vocal presence for crisp sound.'
            },
            {
              icon: CheckCircle2,
              title: 'Studio-Like Clarity',
              desc: 'Smart EQ and compression help your voice cut through with professional polish.'
            },
            {
              icon: Download,
              title: 'One-Click Export',
              desc: 'Export in WAV/MP3 and share anywhere instantly.'
            },
            {
              icon: Languages,
              title: 'Multi-Accent & Language Support',
              desc: 'Optimized for diverse accents and multiple languages for global creators.'
            }
          ].map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`rounded-2xl p-6 border border-emerald-100 dark:border-emerald-900/40 ${idx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-emerald-50 dark:bg-emerald-900/10'} shadow-sm`}
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                  <f.icon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Demo */}
      <Section id="demo" className="bg-white dark:bg-slate-950">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Watch Vclar transform a real voice note</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">See how Vclar turns a noisy, unstructured recording into a clean, concise, and professional result — in seconds.</p>
            <div className="mt-6 flex gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-emerald-500 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-emerald-600 transition">Try Vclar Free</a>
              <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-white/15 bg-white dark:bg-transparent text-slate-700 dark:text-slate-200 px-5 py-3 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition">Learn how it works</a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vclar Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
