"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Space Image */}
        <div
          className="absolute inset-0 bg-[url('/images/hero-space.png')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        />

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
      </div>

      <div className="container relative z-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <span className="inline-flex items-center py-1.5 px-4 mb-8 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-semibold tracking-widest uppercase">
            Engineering The Future
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-xl">
            Integrated Solutions for a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Sustainable World
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light">
            Leading the way in sustainable infrastructure, advanced digital
            engineering, and innovative product solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button
              size="lg"
              className="group text-lg px-8 py-6 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:-translate-y-1"
              asChild
            >
              <Link href="/contact" className="flex items-center">
                Let's Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-200 hover:bg-slate-800 hover:border-slate-500 rounded-full transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent z-10" />
    </section>
  );
}
