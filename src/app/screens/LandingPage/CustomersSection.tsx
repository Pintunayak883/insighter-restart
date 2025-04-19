import React, { JSX } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image"; // Import Next.js Image component

export const CustomersSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      quote:
        "\"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. \"",
      author: "Jenny Wilson",
      company: "Microsoft",
      avatar: "/images/landing/ellipse-6.png",
      iconSrc: "/images/landing/group.png",
    },
    {
      id: 2,
      quote:
        '"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."',
      author: "Hadid Khan",
      company: "Microsoft",
      avatar: "/images/landing/ellipse-4.png",
      iconSrc: "/images/landing/group-1.png",
    },
    {
      id: 3,
      quote:
        "\"It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.\"",
      author: "Wade Warren",
      company: "Microsoft",
      avatar: "/images/landing/ellipse-5.png",
      iconSrc: "/images/landing/group-2.png",
    },
    {
      id: 4,
      quote:
        "\"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. \"",
      author: "Jenny Wilson",
      company: "Microsoft",
      avatar: "/images/landing/ellipse-6.png",
      iconSrc: "/images/landing/group-3.png",
    },
    {
      id: 5,
      quote:
        '"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."',
      author: "Hadid Khan",
      company: "Microsoft",
      avatar: "/images/landing/ellipse-4.png",
      iconSrc: "/images/landing/group-4.png",
    },
    {
      id: 6,
      quote:
        "\"It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.\"",
      author: "Wade Warren",
      company: "Microsoft",
      avatar: "/images/landing/ellipse-5.png",
      iconSrc: "/images/landing/group-5.png",
    },
    {
      id: 7,
      quote:
        "\"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. \"",
      author: "Jenny Wilson",
      company: "Microsoft",
      avatar: "/images/landing/ellipse-6.png",
      iconSrc: "/images/landing/group-6.png",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-16 w-full">
      <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-white text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
        What our customer says
      </h2>

      <div className="w-full max-w-[1300px]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/3 lg:basis-1/3"
              >
                <Card className="h-[340px] bg-[#27322f3d] rounded-[32px] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)] border-none">
                  <CardContent className="flex flex-col h-full gap-8 p-6">
                    <div className="inline-flex items-center justify-center p-4 bg-dark-4 rounded-full bg-[#4B4C4C] w-12 h-12">
                      <div className="w-7 h-7 relative">
                        <Image
                          className="w-full h-full object-contain object-center"
                          alt="Quote icon"
                          src={testimonial.iconSrc}
                          width={28} // Provide width
                          height={28} // Provide height
                        />
                      </div>
                    </div>

                    <p className="font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                      {testimonial.quote}
                    </p>

                    <div className="flex items-center gap-2 mt-auto">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.author}
                        />
                        <AvatarFallback>
                          {testimonial.author.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col">
                        <span className="font-lables-and-buttons font-[number:var(--lables-and-buttons-font-weight)] text-white text-[length:var(--lables-and-buttons-font-size)] tracking-[var(--lables-and-buttons-letter-spacing)] leading-[var(--lables-and-buttons-line-height)] [font-style:var(--lables-and-buttons-font-style)]">
                          {testimonial.author}
                        </span>
                        <span className="font-normal text-slate-300 text-xs leading-5">
                          {testimonial.company}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-transparent border-none shadow-none" />
          <CarouselNext className="right-0 bg-transparent border-none shadow-none" />
        </Carousel>
      </div>
    </section>
  );
};
