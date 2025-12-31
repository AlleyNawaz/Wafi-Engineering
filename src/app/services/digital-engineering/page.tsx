import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Plane, Code, Database, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Integrated Digital Engineering | Wafi Engineering",
  description:
    "Advanced aerospace engineering, UAV design, CFD analysis, and full-stack web development.",
};

const domains = [
  {
    title: "Aerospace Engineering",
    description: "Cutting-edge aviation and UAV solutions.",
    icon: Plane,
    services: [
      "Aircraft & UAV Design",
      "CFD & Structural Analysis",
      "Flight Dynamics & Control",
      "Digital Twins & Prototyping",
    ],
    tools: "CATIA, ANSYS, MATLAB, SolidWorks",
  },
  {
    title: "Web & Software Development",
    description: "Custom digital solutions for modern businesses.",
    icon: Code,
    services: [
      "Frontend (React, Next.js)",
      "Backend (Node.js, Python)",
      "E-commerce & CMS",
      "Cloud & DevOps",
    ],
    tools: "React, Next.js, Django, AWS",
  },
];

export default function DigitalEngineeringPage() {
  return (
    <main className="bg-slate-950 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Integrated Digital Engineering"
          subtitle="Bridging the gap between physical engineering and digital innovation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-colors"
            >
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mr-6">
                  <domain.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {domain.title}
                  </h3>
                  <p className="text-slate-400">{domain.description}</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-4">
                  Core Services
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {domain.services.map((service, i) => (
                    <div
                      key={i}
                      className="flex items-center text-slate-300 bg-slate-950/50 p-3 rounded-lg border border-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-500 mr-3 shrink-0" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Tools & Tech Stack
                </h4>
                <p className="text-slate-300 font-mono text-sm bg-slate-950 inline-block px-3 py-1 rounded border border-slate-800">
                  {domain.tools}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center border border-slate-700">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
            Have a Complex Engineering Challenge?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our team of multidisciplinary engineers is ready to tackle your
            toughest problems.
          </p>
          <Button
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-200 font-bold"
            asChild
          >
            <Link href="/contact">Consult Our Engineers</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
