import { PlusIcon } from "lucide-react";
import React, { JSX } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export const FaqSection = (): JSX.Element => {
  const faqItems = [
    {
      question: "What is Insighter?",
      answer:
        "Insighter is a powerful data analytics platform designed to help users make data-driven decisions with interactive dashboards and real-time insights.",
    },
    {
      question: "How does Insighter help non-technical users?",
      answer:
        "With a no-code interface and intuitive visualizations, Insighter allows non-technical users to explore and analyze data without writing a single line of code.",
    },
    {
      question: "What types of data sources can Insighter connect to?",
      answer:
        "Insighter can connect to databases like MySQL, PostgreSQL, MongoDB, Google Sheets, CSVs, and APIs to fetch and analyze data.",
    },
    {
      question:
        "How long does it take to receive the credit card once approved?",
      answer:
        "This question is not applicable to Insighter. However, we aim to onboard new users within minutes after signup.",
    },
    {
      question: "How secure is my data on Insighter?",
      answer:
        "We use end-to-end encryption and industry-standard security protocols to ensure your data is safe and private at all times.",
    },
    {
      question: "Can I integrate Insighter with other applications?",
      answer:
        "Yes, Insighter supports integrations with Slack, Zapier, Notion, and many other productivity tools via APIs and webhooks.",
    },
    {
      question: "Does Insighter support real-time data updates?",
      answer:
        "Absolutely! With live data syncing and websocket technology, your dashboards stay up-to-date in real-time.",
    },
    {
      question: "What kind of support does Insighter offer?",
      answer:
        "We provide 24/7 customer support via chat and email, along with a knowledge base, video tutorials, and onboarding sessions.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-16 w-full max-w-[1020px] mx-auto">
      <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-white text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
        FAQs
      </h2>

      <div className="w-full">
        <Input
          className="bg-[#3d544d33] text-white border-none rounded-2xl px-6 py-5 h-auto backdrop-blur-[7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7px)_brightness(100%)]"
          placeholder="Search FAQs"
        />
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full transition-all duration-200 ease-in-out"
      >
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b-[1.5px] border-[#4b4c4c] py-4"
          >
            <AccordionTrigger className="flex justify-between items-center hover:no-underline gap-4">
              <span className="[font-family:'Inter',Helvetica] font-bold text-white text-lg text-left">
                {item.question}
              </span>
              <PlusIcon className="h-5 w-5 text-white transition-transform duration-200 ease-in-out accordion-trigger-icon" />
            </AccordionTrigger>
            <AccordionContent className="text-white text-base mt-3 transition-all duration-200 ease-in-out">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
