"use client";

import { leadership } from "@/lib/data";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Leadership() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Our Leadership
          </h2>
          <p className="text-lg text-slate-400">
            Guided by a team of visionaries committed to engineering excellence
            and sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-colors group"
            >
              <div className="aspect-[4/3] bg-slate-800 relative">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">
                  {leader.name}
                </h3>
                <div className="text-amber-500 font-medium mb-4">
                  {leader.role}
                </div>
                <p className="text-slate-400 mb-6">{leader.bio}</p>
                <div className="flex space-x-4">
                  {/* @ts-ignore - property exists in data but type might be inferred loosely */}
                  {leader.linkedin && (
                    <Link
                      href={leader.linkedin as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-amber-500 transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  )}
                  {/* @ts-ignore */}
                  {leader.email && (
                    <Link
                      href={`mailto:${leader.email}`}
                      className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-amber-500 transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
