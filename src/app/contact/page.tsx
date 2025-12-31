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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.9634934898236!2d-77.1328909241589!3d38.85614987173361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b4742e205165%3A0xc6cb593dc3f2824!2sSkyline%20Tower%2C%205103%20Leesburg%20Pike%2C%20Falls%20Church%2C%20VA%2022041%2C%20USA!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
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
