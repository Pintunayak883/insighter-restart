import React from "react";
import Image from "next/image"; // <-- import Next.js Image component
import TextField from "@mui/material/TextField";
import { Separator } from "./ui/separator";

const Footer = () => {
  const footerLinks = {
    aboutUs: {
      title: "About us",
      links: ["Insighter", "Team", "Careers", "Privacy Policy"],
    },
    products: {
      title: "Products",
      links: ["Features", "Model", "Testimonials", "Terms of Service"],
    },
    usefulLinks: {
      title: "Useful Links",
      links: ["Documentation", "API", "Support"],
    },
    social: {
      title: "Social",
      links: ["LinkedIn", "X / Twitter", "Facebook"],
    },
  };

  return (
    <footer className="w-full bg-[#2834303d] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
      <div className="container mx-auto px-6 py-16 ">
        <div className="flex flex-col gap-20 ">
          <div className="flex flex-wrap gap-8">
            {/* Company info and Newsletter */}
            <div className="flex flex-col w-full md:w-[392px] gap-6  ">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    width={30}
                    height={30}
                    alt="Insighter Logo"
                    src="/images/landing/image-1-1.png"
                  />
                  <h4 className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-white text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                    Insighter
                  </h4>
                </div>
                <p className="w-[287px] font-body font-[number:var(--body-font-weight)] text-slate-400 text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                  Transforming Data into actionable Insights
                </p>
              </div>

              {/* Newsletter Section */}
              <div className="flex flex-col gap-4">
                <p className="font-body font-[number:var(--body-font-weight)] text-slate-400 text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                  Subscribe to Newsletter
                </p>

                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{
                    input: {
                      color: "white",
                      padding: "10px 14px",
                      borderRadius: "10px",
                    },
                    label: { color: "#01e37f" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#01e37f" },
                      "&:hover fieldset": { borderColor: "#01e37f" },
                      "&.Mui-focused fieldset": { borderColor: "#01e37f" },
                    },
                  }}
                />
              </div>
            </div>

            <div className="flex flex-1 flex-wrap gap-16 justify-between">
              {Object.values(footerLinks).map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full sm:w-auto min-w-[180px] gap-4"
                >
                  <h5 className="font-lables-and-buttons font-[number:var(--lables-and-buttons-font-weight)] text-white text-[length:var(--lables-and-buttons-font-size)] tracking-[var(--lables-and-buttons-letter-spacing)] leading-[var(--lables-and-buttons-line-height)] [font-style:var(--lables-and-buttons-font-style)]">
                    {section.title}
                  </h5>
                  <div className="flex flex-col gap-3">
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href="#"
                        className="font-body font-[number:var(--body-font-weight)] text-slate-400 text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Separator className="bg-gray/20" />

          {/* Footer bottom */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-white text-xs leading-5">
              Copyright {new Date().getFullYear()}. Insighter all rights
              reserved
            </p>
            <div className="relative">
              <p className="text-white text-xs leading-5">
                This page uses cookies. See cookies details here
              </p>
              <Image
                width={28}
                height={1}
                className="absolute top-4 left-[261px] object-cover"
                alt="Vector"
                src="/images/landing/vector-5.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
