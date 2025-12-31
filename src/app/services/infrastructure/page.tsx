import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sun, Hammer, Building } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Sustainable Infrastructure & Energy | Wafi Engineering",
  description:
    "Expert solar system design, installation, and sustainable construction services.",
};

const services = [
  {
    title: "Solar Energy Solutions",
    description:
      "End-to-end solar power systems for industrial, commercial, and residential clients. From 5kW to 500kW+ installations.",
    icon: Sun,
    features: [
      "Grid-Tied Systems",
      "Hybrid Solutions",
      "Net Metering",
      "Operation & Maintenance",
    ],
  },
  {
    title: "Sustainable Construction",
    description:
      "Green building practices that minimize environmental impact while maximizing efficiency and durability.",
    icon: Building,
    features: [
      "Energy Efficient Design",
      "Green Materials",
      "Smart Building Integration",
      "LEED Consulting",
    ],
  },
  {
    title: "Commissioning & Audit",
    description:
      "Comprehensive energy audits and system commissioning to ensure optimal performance and safety.",
    icon: Hammer, // Using Hammer as placeholder for Audit/Tools
    features: [
      "Performance Testing",
      "Safety Compliance",
      "Energy Audits",
      "Retrofitting",
    ],
  },
];

export default function InfrastructurePage() {
  return (
    <main className="bg-slate-950 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Sustainable Infrastructure & Energy"
          subtitle="Building a greener future through renewable energy and smart construction."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-colors"
            >
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-6">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-slate-900 rounded-3xl p-12 text-center border border-slate-800">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
            Ready to Power Your Future?
          </h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Get a customized solar proposal or construction consultation today.
          </p>
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold"
            asChild
          >
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
