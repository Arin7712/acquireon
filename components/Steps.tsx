"use client";

import {
  Calendar1,
  Check,
  CircleUserRound,
  IdCard,
  MonitorPlay,
  Trophy,
  UserSearch,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const fadeInVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" as any },
  },
});

const Steps = () => {
  return (
    <div className="flex flex-col h-auto px-6 md:px-[6rem] bg-neutral-0 py-[6rem] text-neutral-800 bg-neutral">
      <motion.div
        variants={fadeInVariant(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex items-center gap-2  z-20">
          <div className="border-r-[2px] border-l-[2px] p-1 rounded-3xl">
            <div className="px-3 pr-4 py-2 rounded-3xl border-[1px] shadow-sm text-sm font-medium flex items-center gap-1">
              <CircleUserRound className="size-5 text-indigo-500" />
              <p>Process</p>
            </div>
          </div>

          <div className="h-[1px] w-20 md:w-32 bg-gradient-to-l from-transparent to-neutral-300"></div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInVariant(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-3 max-w-2xl justify-between pt-4"
      >
        <h1 className="text-5xl font-medium tracking-tighter">What we do</h1>
        <p className="text-md text-neutral-700">
          See how we cook up a LinkedIn acquisition strategy that works for you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-between w-full mt-[4rem] gap-10 md:gap-12 ">
        <div className="step-container relative">
          <AnimatedGridPattern
            numSquares={20}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "absolute inset-0 w-full h-full opacity-75",
              "[mask-image:linear-gradient(to_bottom,white_52%,transparent)]",
              "mask-size-100 mask-repeat-no-repeat",
              "pointer-events-none"
            )}
          />
          <h1 className="step-heading">
            Step 1: Optimize your LinkedIn profile
          </h1>

          <Image src="/vector1.png" alt="vector1" width={300} height={300} />

          <div>
            <ul className="space-y-2 text-md text-neutral-600 italic">
              <li className="flex items-center gap-1">
                <div className="bg-indigo-500 p-1 rounded-full w-fit">
                  <Check className="text-white size-3" />
                </div>
                Improve your offer, bio and about section
              </li>
              <li className="flex items-center gap-1">
                <div className="bg-indigo-500 p-1 rounded-full w-fit">
                  <Check className="text-white size-3" />
                </div>{" "}
                Craft a compelling about section
              </li>
              <li className="flex items-center gap-1">
                <div className="bg-indigo-500 p-1 rounded-full w-fit">
                  <Check className="text-white size-3" />
                </div>{" "}
                Update featured section
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="h-[400px] border-[1px] border-gray-400/20"></div> */}

        <div className="step-container bg-indigo-500 relative">
          <AnimatedGridPattern
            numSquares={20}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "absolute inset-0 w-full h-full opacity-75",
              "[mask-image:linear-gradient(to_bottom,white_52%,transparent)]",
              "mask-size-100 mask-repeat-no-repeat",
              "pointer-events-none"
            )}
          />
          <h1 className="step-heading text-white">Step 2: Build authority with content</h1>
          <Image src="/vector1.png" alt="vector1" width={300} height={300} />

          <div>
            <ul className="space-y-2 text-md text-white italic">
              <li className="flex items-center gap-1">
                <div className="bg-white p-1 rounded-full w-fit">
                  <Check className="text-indigo-500 size-3" />
                </div>{" "}
                Make a weekly content strategy
              </li>
              <li className="flex items-center gap-1">
                <div className="bg-white p-1 rounded-full w-fit">
                  <Check className="text-indigo-500 size-3" />
                </div>{" "}
                Make sure every post is targeted to your ICP
              </li>
              <li className="flex items-center gap-1">
                <div className="bg-white p-1 rounded-full w-fit">
                  <Check className="text-indigo-500 size-3" />
                </div>{" "}
                Drive action through a soft CTA{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="h-[400px] border-[1px] border-gray-400/20"></div> */}

        <div className="step-container relative">
                    <AnimatedGridPattern
            numSquares={20}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "absolute inset-0 w-full h-full opacity-75",
              "[mask-image:linear-gradient(to_bottom,white_52%,transparent)]",
              "mask-size-100 mask-repeat-no-repeat",
              "pointer-events-none"
            )}
          />
          <h1 className="step-heading">
            Step 3: Run strategic DM campaigns to book calls
          </h1>
          <Image src="/vector1.png" alt="vector1" width={300} height={300} />

          <div>
            <ul className="space-y-2 text-md text-neutral-600 italic">
              <li className="flex items-center gap-1">
                <div className="bg-indigo-500 p-1 rounded-full w-fit">
                  <Check className="text-white size-3" />
                </div>{" "}
                Reach out to your target client daily
              </li>
              <li className="flex items-center gap-1">
                <div className="bg-indigo-500 p-1 rounded-full w-fit">
                  <Check className="text-white size-3" />
                </div>{" "}
                Follow-up on leads who’ve shown interest
              </li>
              <li className="flex items-center gap-1">
                <div className="bg-indigo-500 p-1 rounded-full w-fit">
                  <Check className="text-white size-3" />
                </div>{" "}
                Push them to book a call with us{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
