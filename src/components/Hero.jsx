import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Play, Sparkles } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut' }
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative w-full h-[640px] sm:h-[720px] bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white dark:from-slate-950/80 dark:via-slate-950/70 dark:to-slate-950" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
          <div className="w-full max-w-3xl">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={fadeInUp.transition}
            >
              <span className="text-slate-600 dark:text-slate-300">Say it Clearly.</span>{' '}
              <span className="text-emerald-500">Share it Confidently.</span>
            </motion.h1>

            <motion.p
              className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Vclar enhances your voice notes — auto-correcting grammar, cleaning background noise, and delivering clear, professional audio.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 text-white px-6 py-3 text-base font-semibold shadow-sm shadow-emerald-200 hover:bg-emerald-600 transition"
              >
                Try Vclar Free
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/15 bg-white dark:bg-transparent text-slate-700 dark:text-slate-200 px-6 py-3 text-base font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition"
              >
                <Play size={18} />
                Watch Demo
              </a>
            </motion.div>

            <motion.div
              className="mt-10 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Sparkles className="text-emerald-500" size={18} />
              <span>AI-powered clarity • Studio-quality output</span>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] sm:w-[70%] h-16 bg-gradient-to-r from-emerald-500/10 via-emerald-500/30 to-emerald-500/10 rounded-full blur-2xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
}
