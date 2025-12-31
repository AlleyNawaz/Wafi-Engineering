"use client";

import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/923091945834?text=Hello%20Wafi%20Engineering%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 fill-current" />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1 rounded-lg shadow-md text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Chat with us
      </span>
    </Link>
  );
}
