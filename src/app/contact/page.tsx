import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Wafi Engineering",
  description:
    "Get in touch with Wafi Engineering for your infrastructure, digital, or product needs.",
};

export default function ContactPage() {
  return (
    <main className="bg-slate-950 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Get in Touch"
          subtitle="Ready to start your next project? Contact us today."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 shrink-0 mr-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Head Office
                  </h4>
                  <p className="text-slate-400">
                    Wafi Engineering
                    <br />
                    Street No. 1, Opposite Income Tax Office,
                    <br />
                    G.T. Road, Gujranwala, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 shrink-0 mr-6">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                  <p className="text-slate-400">+923091945834</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 shrink-0 mr-6">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                  <p className="text-slate-400">info@wafiengineering.com</p>
                  <p className="text-slate-400">sales@wafiengineering.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 shrink-0 mr-6">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Business Hours
                  </h4>
                  <p className="text-slate-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-slate-400">Sat - Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-12 w-full h-64 rounded-xl overflow-hidden border border-slate-800">
              <iframe
                src="https://maps.google.com/maps?q=Wafi%20Engineering%2C%20Street%20No.%201%2C%20Opposite%20Income%20Tax%20Office%2C%20G.T.%20Road%2C%20Gujranwala%2C%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
