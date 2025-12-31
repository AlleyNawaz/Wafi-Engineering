import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold text-white mb-6">
              Wafi Engineering
            </h3>
            <p className="mb-6 text-slate-400">
              Sustainable Infrastructure, Integrated Digital Engineering, &
              Engineered Product Solutions for a better future.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://pk.linkedin.com/company/wafiengineering"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/WafiEngineering"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/people/Wafi-Engineering/61581184391811"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://web.whatsapp.com/send?phone=923091945834&text=Hello%2C%20I%20need%20assistance!"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-amber-500 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Areas - using links to specific service pages? For now just services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services/infrastructure"
                  className="hover:text-amber-500 transition-colors"
                >
                  Sustainable Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-engineering"
                  className="hover:text-amber-500 transition-colors"
                >
                  Digital Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/products"
                  className="hover:text-amber-500 transition-colors"
                >
                  Product Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-amber-500 shrink-0" />
                <span>
                  Wafi Engineering
                  <br />
                  Street No. 1, Opposite Income Tax Office,
                  <br />
                  G.T. Road, Gujranwala, Pakistan
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-amber-500 shrink-0" />
                <span>+923091945834</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-amber-500 shrink-0" />
                <span>info@wafiengineering.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Wafi Engineering. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
