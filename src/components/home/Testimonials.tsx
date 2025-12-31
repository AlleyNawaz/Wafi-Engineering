"use client";

import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-16 text-center">
          Trusted by Industry Leaders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-slate-800" />

              <p className="text-lg text-slate-300 mb-8 italic relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold mr-4">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
