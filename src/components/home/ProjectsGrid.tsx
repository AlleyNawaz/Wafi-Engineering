"use client";

import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function ProjectsGrid() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-400">
              A showcase of our recent engineering milestones making a global
              impact.
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden md:flex border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 mt-4 md:mt-0"
            asChild
          >
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-slate-950 border border-slate-800 aspect-[4/3] cursor-pointer"
            >
              {/* Image Placeholder - In real app use Image component with actual files */}
              <div className="absolute inset-0 bg-slate-800 transition-transform duration-500 group-hover:scale-110">
                {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">
                  [Project Image: {project.title}]
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-amber-500 text-sm font-semibold mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button
            variant="outline"
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900"
            asChild
          >
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
