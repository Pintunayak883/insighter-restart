import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Image from "next/image"; // Import Next.js Image component

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col w-full max-w-[1240px] items-center gap-8">
        <div className="flex flex-col items-center gap-[31px] relative">
          <Image
            className="absolute w-[267px] h-[103px] top-[60px] left-[231px]"
            alt="Vector"
            src="/images/landing/Vector4.png"
            width={267}
            height={103} // Providing width and height for optimization
          />

          <h1 className="relative w-full max-w-[665px] mt-[-1.00px] font-heading-1 font-[number:var(--heading-1-font-weight)] text-white text-[length:var(--heading-1-font-size)] text-center tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
            Struggling to Unlock Insights from your Data
          </h1>

          <p className="relative w-full max-w-[1022px] font-body font-[number:var(--body-font-weight)] text-slate-300 text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
            Insighter bridges the gap between complex data systems and
            actionable insights. We empower organizations to make data-driven
            decisions effortlessly.
          </p>

          <Button className="inline-flex items-center gap-4 px-8 py-4 bg-[#01e37f] rounded-[64px] text-dark hover:bg-[#00c96f]">
            <span className="font-lables-and-buttons font-[number:var(--lables-and-buttons-font-weight)] text-[length:var(--lables-and-buttons-font-size)] tracking-[var(--lables-and-buttons-letter-spacing)] leading-[var(--lables-and-buttons-line-height)] [font-style:var(--lables-and-buttons-font-style)]">
              Get Started
            </span>
            <ArrowRightIcon className="w-[24.5px] h-[18.5px]" />
          </Button>
        </div>

        <div className="relative w-full max-w-[702px] h-[581px]">
          <Card className="relative h-[549px] top-8 bg-[#3d544d3d] rounded-[19.5px] shadow-[4.88px_0px_0.49px_#0000000a,0px_0.98px_2.93px_#0000001a,0px_7.8px_11.7px_#0000001a] backdrop-blur-[7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7px)_brightness(100%)] border-0">
            <CardContent className="p-0">
              <div className="absolute w-full max-w-[702px] h-[499px] top-[50px] left-0 bg-[#080a09] rounded-[0px_0px_19.5px_19.5px] overflow-hidden">
                <Image
                  className="absolute w-full h-full top-0 left-0 object-cover"
                  alt="Dashboard preview"
                  src="/images/landing/image-3.png"
                  layout="fill" // Using layout fill for responsive image
                />
              </div>

              <div className="absolute w-[286px] h-[19px] top-[15px] left-24 bg-[#26282b] rounded-[3.9px]">
                <div className="absolute top-1 left-[7px] [font-family:'Inter',Helvetica] font-medium text-[#ffffffd9] text-[7.8px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  https://insighter.com
                </div>
              </div>

              <div className="inline-flex items-start gap-[6.57px] absolute top-5 left-[21px]">
                <div className="relative w-[11.21px] h-[11.21px] bg-[#f45952] rounded-[5.61px]" />
                <div className="relative w-[11.21px] h-[11.21px] bg-[#dfb94e] rounded-[5.61px]" />
                <div className="relative w-[11.21px] h-[11.21px] bg-[#5ab748] rounded-[5.61px]" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
