import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`py-20 ${className}`}>
    <div className="max-w-6xl mx-auto px-6">{children}</div>
  </section>
);

export default function SocialProof() {
  return (
    <div>
      {/* Testimonials */}
      <Section id="testimonials" className="bg-slate-50 dark:bg-slate-900/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Loved by creators and professionals</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Hear what our users have to say.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: 'I sound like a pro now, thanks to Vclar!', author: 'Sarah M., Podcaster' },
            { quote: 'My interviews are cleaner, clearer, and faster to publish.', author: 'Ravi T., Journalist' },
            { quote: 'Perfect for quick client updates without background noise.', author: 'Daniel C., Consultant' }
          ].map((t, idx) => (
            <motion.div
              key={t.author}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-slate-800 dark:text-slate-100 text-base">“{t.quote}”</p>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section id="use-cases" className="bg-white dark:bg-slate-950">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Use Cases</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Where Vclar makes a difference.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            'Creators & Influencers',
            'Journalists & Interviewers',
            'Business Professionals',
            'Students & Lecturers',
            'Multilingual Voice Translators'
          ].map((c, idx) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/10 p-4 text-slate-700 dark:text-slate-200 text-center font-medium"
            >
              {c}
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
