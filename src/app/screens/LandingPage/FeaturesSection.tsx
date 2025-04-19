import { BarChart3Icon, ShieldIcon } from "lucide-react";
import React, { JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image"; // Importing Next.js Image component

export const FeaturesSection = (): JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      icon: <ShieldIcon className="w-8 h-8 text-white" />,
      title: "Secure Analysis",
      description: "Your data and funds will be securely protected.",
    },
    {
      icon: (
        <div className="relative w-8 h-8">
          <div className="relative w-6 h-6 top-1 left-1">
            <div className="relative w-[25px] h-[26px] -top-px -left-px">
              <Image
                className="absolute w-[25px] h-[25px] top-px left-0"
                alt="Ellipse"
                src="/images/landing/ellipse-8.svg"
                width={25}
                height={25} // Providing width and height for image optimization
              />
              <Image
                className="absolute w-[11px] h-[9px] top-0 left-[13px]"
                alt="Ellipse"
                src="/images/landing/ellipse-7.svg"
                width={11}
                height={9} // Providing width and height for image optimization
              />
            </div>
          </div>
        </div>
      ),
      title: "Data Exploration",
      description:
        "Connect to data sources and generate insights with AI-driven queries.",
    },
    {
      icon: <BarChart3Icon className="w-8 h-8 text-white" />,
      title: "Dashboards & Reports",
      description: "Build visualizations and reports for deeper insights.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-16">
      <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-white text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
        What do we offer?
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="w-[392px] bg-transparent border-none">
            <CardContent className="flex items-start gap-6 p-0">
              <div className="flex items-center justify-center p-4 bg-[#2c2d2d80] rounded-3xl">
                {feature.icon}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-white text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                  {feature.title}
                </h3>
                <p className="font-body font-[number:var(--body-font-weight)] text-slate-300 text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
