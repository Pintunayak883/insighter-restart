import React, { JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = (): JSX.Element => {
  // Data for impact stats to enable mapping
  const impactStats = [
    {
      value: "10+",
      title: "Organizations",
      description: "Empowered with streamlined data management",
    },
    {
      value: "95%",
      title: "User Satisfaction",
      description: "Users report enhanced decision-making capabilities",
    },
    {
      value: "500+",
      title: "Insights Generated",
      description: "Delivering actionable insights across industries",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-16 p-16 bg-[#3d544d3d] rounded-[32px] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
      <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-white text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
        The Impact
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {impactStats.map((stat, index) => (
          <Card key={index} className="w-[340px] bg-transparent border-none">
            <CardContent className="flex flex-col items-center justify-center gap-3 p-0">
              <h3 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#01e37fcc] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                {stat.value}
              </h3>
              <h4 className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-[#01e37fcc] text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                {stat.title}
              </h4>
              <p className="w-full font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
