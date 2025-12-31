"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { businessAreas } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Cpu, Package } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const iconMap = {
  Building2: Building2,
  Cpu: Cpu,
  Package: Package,
};

export default function ServicesPage() {
  return (
    <main className="bg-slate-950 min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <SectionHeading
          title="Our Services"
          subtitle="Integrated engineering solutions tailored for a sustainable and connected future."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch justify-center">
          {businessAreas.map((area, index) => {
            const Icon = iconMap[area.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 shadow-2xl shadow-black/20 hover:shadow-amber-500/5"
              >
                {/* Decoration Line */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image/Header Section */}
                <div className="relative h-64 w-full overflow-hidden rounded-t-3xl bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                  {/* Placeholder for actual image - using a subtle pattern or actual image path if available */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-800 group-hover:scale-105 transition-transform duration-700">
                    {/* We use the same text placeholder technique but stylized */}
                    <div className="flex flex-col items-center gap-2 opacity-50">
                      <Icon className="w-12 h-12" />
                      <span className="text-sm font-mono tracking-widest uppercase">
                        Service Image
                      </span>
                    </div>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute -bottom-6 left-8 z-20">
                    <div className="w-14 h-14 rounded-xl bg-slate-950 border border-slate-800 shadow-xl flex items-center justify-center text-amber-500 group-hover:text-amber-400 group-hover:border-amber-500/50 transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 pt-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-amber-500 transition-colors mt-2">
                    {area.title}
                  </h3>

                  <p className="text-slate-400 text-base leading-relaxed mb-8 flex-grow">
                    {area.description}
                  </p>

                  <Button
                    variant="outline"
                    className="self-start w-full sm:w-auto border-slate-700 bg-transparent text-slate-300 hover:bg-amber-500 hover:border-amber-500 hover:text-slate-900 transition-all duration-300 font-medium"
                    asChild
                  >
                    <Link
                      href={area.href}
                      className="flex items-center justify-center"
                    >
                      Detailed Services <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
