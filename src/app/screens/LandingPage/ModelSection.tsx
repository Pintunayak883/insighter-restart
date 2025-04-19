import React, { JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image"; // Next.js Image component imported

// Feature card data for mapping
const featureCards = [
  {
    title: "Advanced Analysis",
    description:
      "Utilize AI to answer your queries on data, interpret results, and provide actionable insights.",
    backgroundImage: "/images/landing/image.png",
    chartContent: (
      <div className="flex flex-col max-w-[270px] h-[157.5px] items-start justify-between p-[15px] relative w-full rounded-[15px] border-[0.75px] border-solid border-[#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_-15%,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(46,51,90,0.1)_0%,rgba(28,27,51,0.02)_100%)]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-[7.5px] px-0 py-[3px] relative flex-[0_0_auto] rounded-[7.5px] overflow-hidden">
            <div className="relative w-fit mt-[-0.75px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
              Lesson Hour Tracking
            </div>
            <Image
              className="relative w-[18px] h-[18px]"
              alt="Activity"
              src="/images/landing/activity.svg"
              width={18}
              height={18}
            />
          </div>
        </div>

        <div className="relative self-stretch w-full h-[110px] mt-[-6.5px]">
          <div className="absolute w-56 h-[88px] top-2 left-4">
            <div className="absolute w-56 h-[88px] top-0 left-0">
              <Image
                className="top-0 absolute w-56 h-px left-0"
                alt="Line"
                src="/images/landing/line-3.svg"
                width={224}
                height={1}
              />
              <Image
                className="top-[29px] absolute w-56 h-px left-0"
                alt="Line"
                src="/images/landing/line-3.svg"
                width={224}
                height={1}
              />
              <Image
                className="top-[58px] absolute w-56 h-px left-0"
                alt="Line"
                src="/images/landing/line-3.svg"
                width={224}
                height={1}
              />
              <Image
                className="top-[87px] absolute w-56 h-px left-0"
                alt="Line"
                src="/images/landing/line-3.svg"
                width={224}
                height={1}
              />
            </div>
            <Image
              className="absolute w-[223px] h-[52px] top-[35px] left-0"
              alt="Stroke"
              src="/images/landing/stroke.svg"
              width={223}
              height={52}
            />
            <div className="flex flex-col w-56 items-start gap-[7.5px] absolute top-[3px] left-0">
              <Image
                className="relative self-stretch w-full h-[85.1px] mt-[-0.35px] mb-[-0.75px] ml-[-0.26px] mr-[-0.27px]"
                alt="Line"
                src="/images/landing/line.png"
                width={224}
                height={85.1}
              />
            </div>
          </div>

          <div className="flex flex-col w-[7px] items-start gap-[15.75px] absolute top-0 left-0">
            {["8h", "6h", "4h", "2h"].map((hour, index) => (
              <div
                key={index}
                className="relative w-fit mr-[-3.80px] [font-family:'Inter',Helvetica] font-normal text-[#ffffffb2] text-[9px] tracking-[0] leading-[13.5px] whitespace-nowrap"
              >
                {hour}
              </div>
            ))}
          </div>

          <div className="flex w-[223px] items-start justify-between absolute top-24 left-4">
            {["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"].map(
              (day, index) => (
                <div
                  key={index}
                  className="relative w-fit mt-[-0.75px] [font-family:'Inter',Helvetica] font-normal text-[#ffffff80] text-[9px] tracking-[0] leading-[13.5px] whitespace-nowrap"
                >
                  {day}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Intuitive Data Management",
    description:
      "Define tables, columns, and relationships with an easy-to-use interface.",
    backgroundImage: "/images/landing/image-2.png",
    chartContent: (
      <div className="relative self-stretch w-full h-[157.5px]">
        <div className="relative w-[345px] h-[158px] left-2">
          <div className="absolute w-[345px] h-[158px] top-0 left-0">
            <div className="relative w-[297px] h-[123px] top-[34px] left-6">
              <Image
                className="absolute w-[264px] h-[123px] top-0 left-[21px]"
                alt="Vector"
                src="/images/landing/vector.svg"
                width={264}
                height={123}
              />
              <div className="absolute w-[297px] h-[30px] top-[71px] left-0 rounded-[3px] border-[#ffffff33] shadow-[0px_3px_8.25px_0.75px_#9696961a] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_-15%,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(46,51,90,0.1)_0%,rgba(28,27,51,0.02)_100%)] overflow-hidden border-[0.75px] border-solid">
                <div className="absolute w-[304px] h-[216px] top-[-26px] left-[202px]">
                  <div className="w-[304px] h-[216px] left-0 absolute top-0">
                    <Image
                      className="absolute w-2 h-3.5 top-[42px] left-[86px]"
                      alt="Circle"
                      src="/images/landing/circle-8.svg"
                      width={8}
                      height={14}
                    />
                    <div className="absolute w-[110px] h-[111px] top-[-3143px] left-[-3210px] bg-[url(/circle-7.svg)] bg-[100%_100%]">
                      <Image
                        className="absolute w-[73px] h-[73px] top-0 left-0"
                        alt="Circle"
                        src="/images/landing/circle-5.svg"
                        width={73}
                        height={73}
                      />
                      <Image
                        className="absolute w-10 h-10 top-0 left-0"
                        alt="Circle"
                        src="/images/landing/circle-3.svg"
                        width={40}
                        height={40}
                      />
                      <Image
                        className="absolute w-[23px] h-[23px] top-0 left-0"
                        alt="Circle"
                        src="/images/landing/circle-2.svg"
                        width={23}
                        height={23}
                      />
                      <Image
                        className="absolute w-[7px] h-[7px] top-0 left-0"
                        alt="Circle"
                        src="/images/landing/circle-1.svg"
                        width={7}
                        height={7}
                      />
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-[5.85px] px-[11.7px] py-[5.85px] absolute top-[31px] left-[25px] bg-[#01e37fcc] rounded-[3px]">
                    <div className="relative w-fit mt-[-0.37px] [font-family:'M_PLUS_1',Helvetica] font-medium text-dark text-[5.9px] tracking-[0] leading-[8.8px] whitespace-nowrap">
                      Ask Insighter
                    </div>
                  </div>
                </div>
                <div className="absolute w-[18px] h-[19px] top-[5px] left-2 [font-family:'Inter',Helvetica] font-normal text-zinc-400 text-[15.8px] tracking-[0] leading-[27px] whitespace-nowrap">
                  ✨
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[156px] h-[42px] top-[27px] left-[94px] bg-[#01e37f1a] rounded-[9px]">
            <div className="relative w-36 h-[30px] top-1.5 left-1.5 bg-[#01e37f] rounded-[4.5px] overflow-hidden shadow-[0px_0px_0px_0.75px_#06b6d4,0px_0.75px_2.25px_#06b6d459,inset_0px_0.75px_0.75px_#ffffff4c]">
              <div className="absolute w-[126px] h-[13px] top-2 left-[9px] [font-family:'Inter',Helvetica] font-medium text-[#080a09] text-[10.5px] tracking-[0] leading-[18px] whitespace-nowrap">
                Hey! How can I help you?
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Powerful Visualizations",
    description:
      "Create and customize reports and dashboards to visualize your data effectively.",
    backgroundImage: "/images/landing/image-4.png",
    chartContent: (
      <div className="flex max-w-[270px] h-[157.5px] items-start p-[15px] relative w-full rounded-[15px] border-[0.75px] border-solid border-[#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_-15%,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(46,51,90,0.1)_0%,rgba(28,27,51,0.02)_100%)]">
        <div className="flex items-end justify-between relative flex-1 grow mb-[-4.25px]">
          {[
            {
              period: "1-7 nov",
              chartSrc: "/images/landing/chart-2.svg",
              height: "108px",
            },
            {
              period: "8-14 nov",
              chartSrc: "/images/landing/chart.svg",
              height: "81.75px",
            },
            {
              period: "15-21 nov",
              chartSrc: "/images/landing/chart-1.svg",
              height: "54px",
            },
            {
              period: "22-28 nov",
              chartSrc: "/images/landing/chart-3.svg",
              height: "108.75px",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-9 items-center gap-[9px] relative"
            >
              <Image
                className={`relative w-9 h-[${item.height}]`}
                alt="Chart"
                src={item.chartSrc}
                width={36}
                height={parseFloat(item.height)}
              />
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#ffffffb2] text-[9px] tracking-[0] leading-[13.5px] whitespace-nowrap">
                {item.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Seamless Integration",
    description:
      "Connect to a wide range of databases and file formats effortlessly.",
    backgroundImage: "/images/landing/image-5.png",
    chartContent: (
      <div className="relative max-w-[270px] w-full h-[157.5px]">
        <div className="relative w-[270px] h-[156px]">
          {[
            { top: "0", left: "49px" },
            { top: "22px", left: "6px", isGreen: true },
            { top: "45px", left: "0" },
          ].map((card, index) => (
            <div
              key={index}
              className={`absolute w-[221px] h-[111px] top-[${
                card.top
              }] left-[${
                card.left
              }] rounded-[15px] border-[#ffffff33] backdrop-blur-[${
                index === 1 ? "7.5px" : "15px"
              }] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(${
                index === 1 ? "7.5px" : "15px"
              })_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_-15%,rgba(${
                card.isGreen ? "1,227,127" : "255,255,255"
              },0.16)_0%,rgba(${
                card.isGreen ? "1,227,127" : "255,255,255"
              },0)_100%),linear-gradient(180deg,rgba(46,51,90,0.1)_0%,rgba(28,27,51,0.02)_100%)] overflow-hidden border-[0.75px] border-solid`}
            >
              {card.isGreen && (
                <Image
                  className="w-[77px] h-[111px] left-36 absolute top-0"
                  alt="Vortex"
                  src="/images/landing/vortex-3.svg"
                  width={77}
                  height={111}
                />
              )}
              {index === 2 && (
                <div className="absolute w-[304px] h-[216px] top-[-52px] left-[150px]">
                  <div className="relative w-[123px] h-[123px] top-[-3372px] left-[-3104px] bg-[url(/circle-8.svg)] bg-[100%_100%]">
                    <Image
                      className="absolute w-[110px] h-[111px] topOLS-0 left-0"
                      alt="Circle"
                      src="/images/landing/circle-7.svg"
                      width={110}
                      height={111}
                    />
                    <Image
                      className="absolute w-[73px] h-[73px] top-0 left-0"
                      alt="Circle"
                      src="/images/landing/circle-5.svg"
                      width={73}
                      height={73}
                    />
                    <Image
                      className="absolute w-10 h-10 top-0 left-0"
                      alt="Circle"
                      src="/images/landing/circle-3.svg"
                      width={40}
                      height={40}
                    />
                    <Image
                      className="absolute w-[23px] h-[23px] top-0 left-0"
                      alt="Circle"
                      src="/images/landing/circle-2.svg"
                      width={23}
                      height={23}
                    />
                    <Image
                      className="absolute w-[7px] h-[7px] top-0 left-0"
                      alt="Circle"
                      src="/images/landing/circle-1.svg"
                      width={7}
                      height={7}
                    />
                  </div>
                </div>
              )}
              <div className="inline-flex flex-col items-start gap-1.5 absolute top-[69px] left-3">
                <div className="relative w-[111px] h-1.5 bg-black rounded-md opacity-10" />
                <div className="relative w-24 h-1.5 bg-black rounded-md opacity-10" />
                <div className="relative w-[126px] h-1.5 bg-black rounded-md opacity-10" />
              </div>
              <div className="absolute w-[72px] h-[9px] top-3 left-3 bg-black rounded-md opacity-10" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export const ModelSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-16 w-full">
      <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-white text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)]">
        The Model
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1080px] px-4 md:px-[60px]">
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className="min-h-[300px] rounded-[15px] overflow-hidden border-[0.75px] border-solid border-[#ffffff1a] shadow-[0px_0px_3px_#ffffff40] backdrop-blur-[18px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)]"
          >
            <CardContent className="p-[22.5px] flex items-center flex-col h-full justify-between relative">
              <div
                className="absolute w-full h-[443px] top-[-72px] left-0 opacity-50 bg-cover bg-[50%_50%]"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              />

              {card.chartContent}

              <div className="flex flex-col max-w-[292.5px] items-start gap-1.5 relative w-full z-10 pt-4">
                <h3 className="font-lables-and-buttons font-[number:var(--lables-and-buttons-font-weight)] text-white text-[length:var(--lables-and-buttons-font-size)] tracking-[var(--lables-and-buttons-letter-spacing)] leading-[var(--lables-and-buttons-line-height)]">
                  {card.title}
                </h3>
                <p className="font-body-2 font-[number:var(--body-2-font-weight)] text-[#ffffffb2] text-[length:var(--body-2-font-size)] tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)]">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
