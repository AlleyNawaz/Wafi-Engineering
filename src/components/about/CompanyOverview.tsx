"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function CompanyOverview() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Engineering the Future Since 2013
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Wafi Engineering was founded on the principle that sustainable
              infrastructure and advanced technology are the keys to a better
              tomorrow. Over the last decade, we have evolved from a local
              construction firm into a global engineering powerhouse.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Our integrated approach combines traditional engineering wisdom
              with cutting-edge digital solutions, allowing us to deliver
              projects that are not only structurally sound but also smart,
              efficient, and future-ready.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-amber-500 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-white">Our Mission</h4>
                  <p className="text-slate-400">
                    To deliver innovative, sustainable, and high-quality
                    engineering solutions that empower communities and
                    businesses globally.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-amber-500 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-white">Our Vision</h4>
                  <p className="text-slate-400">
                    To be the world's most trusted partner in sustainable
                    infrastructure and digital engineering transformation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 relative z-10 border border-slate-700">
              {/* Image Placeholder */}
              <Image
                src="/images/Office.jpeg"
                alt="Wafi Engineering Office"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-amber-500/10 rounded-2xl -z-10 border border-amber-500/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
