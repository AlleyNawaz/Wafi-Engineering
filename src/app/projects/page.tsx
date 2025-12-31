"use client";

import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const categories = ["All", "Infrastructure", "Digital", "Products"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="bg-slate-950 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Projects"
          subtitle="A portfolio of engineering excellence across multiple disciplines."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "min-w-[100px]",
                activeCategory === category
                  ? "bg-amber-500 text-slate-900 border-amber-500 hover:bg-amber-600"
                  : "bg-transparent border-slate-700 text-slate-300 hover:text-white hover:border-amber-500"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group hover:border-amber-500/50 cursor-pointer"
              >
                <div className="aspect-[4/3] bg-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-500">
                    [Image: {project.title}]
                  </div>
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="p-6">
                  <div className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No projects found in this category.
          </div>
        )}
      </div>
    </main>
  );
}
