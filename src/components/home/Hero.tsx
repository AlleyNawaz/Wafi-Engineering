"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Gradient/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950/90 z-10" />
        {/* Placeholder for Video/Image */}
        <div className="w-full h-full bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30" />
      </div>

      <div className="container relative z-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 mb-6 rounded-full bg-amber-500/10 text-amber-500 text-sm font-semibold tracking-wider border border-amber-500/20">
            ENGINEERING THE FUTURE
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Integrated Solutions for a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Sustainable World
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Leading the way in sustainable infrastructure, advanced digital
            engineering, and innovative product solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="text-lg px-8 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold"
              asChild
            >
              <Link href="/contact">Let's Discuss Your Project</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-slate-700 text-slate-200 hover:bg-slate-800"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
