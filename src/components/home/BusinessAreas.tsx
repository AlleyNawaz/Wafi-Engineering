"use client";

import { Button } from "@/components/ui/button";
import { businessAreas } from "@/lib/data";
import { ArrowRight, Building2, Cpu, Package } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const iconMap = {
  Building2: Building2,
  Cpu: Cpu,
  Package: Package,
};

export function BusinessAreas() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-slate-400">
            Delivering excellence across three core pillars of engineering and
            innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessAreas.map((area, index) => {
            const Icon = iconMap[area.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 p-8 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24 text-amber-500" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6 text-amber-500">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-slate-400 mb-8 flex-grow">
                    {area.description}
                  </p>

                  <Button
                    variant="link"
                    className="p-0 h-auto text-amber-500 hover:text-amber-400 self-start group-hover:translate-x-2 transition-transform"
                    asChild
                  >
                    <Link href={area.href} className="flex items-center">
                      Explore Services <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
