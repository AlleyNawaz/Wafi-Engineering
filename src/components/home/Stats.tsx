"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Completed Projects", value: "705+" },
  { label: "Happy Clients", value: "524+" },
  { label: "Years of Excellence", value: "13" },
  { label: "Global Partners", value: "20+" },
];

export function Stats() {
  return (
    <section className="py-20 bg-slate-950 border-y border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-amber-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-400 uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
