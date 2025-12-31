import { CompanyOverview } from "@/components/about/CompanyOverview";
import { Leadership } from "@/components/about/Leadership";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata = {
  title: "About Us | Wafi Engineering",
  description:
    "Learn about Wafi Engineering, our mission, vision, and the leadership team driving sustainable innovation.",
};

export default function AboutPage() {
  return (
    <main className="bg-slate-950 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 mb-16 text-center">
        <SectionHeading
          title="About Wafi Engineering"
          subtitle="Pioneering sustainable solutions for a connected world."
        />
      </div>

      <CompanyOverview />
      <Leadership />
    </main>
  );
}
