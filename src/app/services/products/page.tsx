import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Fan, Settings, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Engineered Product Solutions | Wafi Engineering",
  description:
    "Manufacturing and export of premium dental instruments and energy-efficient BLDC fans.",
};

const products = [
  {
    title: "BLDC Smart Fans",
    description:
      "Next-generation ceiling fans with brushless DC motors for up to 65% energy savings.",
    icon: Fan,
    image: "/images/fan2.jpeg",
    features: [
      "Remote & Smart Control",
      "Silent Operation",
      "Energy Efficient",
      "Modern Design",
    ],
    markets: "Middle East, South Asia",
  },
  {
    title: "Dental Instruments",
    description:
      "High-precision surgical and dental instruments manufactured to ISO standards.",
    icon: Settings,
    image: "/images/dental2.jpeg",
    features: [
      "Surgical Grade Steel",
      "ISO & CE Certified",
      "Precision CNC Machined",
      "Custom Branding",
    ],
    markets: "USA, UK, Canada, Germany",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-slate-950 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Engineered Product Solutions"
          subtitle="World-class manufacturing and export quality products."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 group hover:border-amber-500/50 transition-colors"
            >
              <div className="h-64 bg-slate-800 flex items-center justify-center text-slate-600 relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-slate-950/80 px-3 py-1 rounded-full text-xs font-bold text-amber-500 flex items-center border border-slate-700 z-10">
                  <Globe className="w-3 h-3 mr-2" /> Export Quality
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {product.title}
                </h3>
                <p className="text-slate-400 mb-8 h-12">
                  {product.description}
                </p>

                <div className="space-y-4 mb-8">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <p className="text-sm text-slate-500 mb-1">Key Markets</p>
                  <p className="text-slate-300 font-medium">
                    {product.markets}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="rounded-3xl p-12 text-center bg-amber-500 text-slate-900">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Interested in Bulk Orders or Distribution?
          </h3>
          <p className="mb-8 max-w-2xl mx-auto font-medium opacity-90">
            We offer competitive pricing and white-label manufacturing services
            for international partners.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold"
            asChild
          >
            <Link href="/contact">Contact Sales Team</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
