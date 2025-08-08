"use client";

import React from "react";
import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Cover } from "./ui/cover";
import Image from "next/image";
import { Caveat } from "next/font/google";
import { motion } from "framer-motion";

const font = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // delay per element
      duration: 0.6,
      ease: "easeOut" as any,
    },
  }),
};

const Hero = () => {
  return (
    <div className="relative md:px-0 px-3 flex flex-col items-center justify-center text-center h-screen md:h-[99vh] text-neutral-800">
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

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="space-y-5 md:max-w-3xl text-center flex flex-col justify-center items-center z-10"
      >
        <motion.div custom={0} variants={fadeInUp}>
          <div className="bg-neutral-50 shadow-neutral-300/75 shadow-xs flex items-center gap-2 border-[1px] border-neutral-300 text-xs rounded-full px-1 pr-2 py-1 z-40">
            <div className="bg-neutral-100/40 flex items-center gap-1 border-[1px] px-2 py-1 border-neutral-300 rounded-full">
              <div className="bg-indigo-400/20 p-1 flex items-center justify-center rounded-full border-[1px] border-orange-400/10">
                <div className="bg-indigo-500 size-2 rounded-full"></div>
              </div>
              <p>We're Live</p>
            </div>
            <p>Only 2 Spots for August</p>
          </div>
        </motion.div>

        <motion.h1 custom={1} variants={fadeInUp} className="text-4xl md:text-[2.8rem] font-medium tracking-tighter leading-tighter">
          Targeted LinkedIn <span className="text-indigo-500">Client Acquisition </span>That Converts{" "}
          <Cover>More Leads</Cover>
        </motion.h1>

        <motion.p custom={2} variants={fadeInUp} className="md:text-lg text-md text-neutral-500 max-w-2xl tracking-tight">
          We help B2B service providers consistently{" "}
          <span className="">
            book qualified sales calls{" "}
          </span>
          through targeted LinkedIn client acquisition frameworks.
        </motion.p>

        <motion.div custom={3} variants={fadeInUp} className="flex items-center justify-center gap-6 relative">
          <Button className="bg-indigo-500 px-2 text-md py-6 rounded-full font-light text-sm">
            Apply for a Free Call
            <MoveRight className="bg-white p-2 rounded-full text-indigo-500 size-8" />
          </Button>
          <Image
            src="/hero-vector.svg"
            alt="hero-vector"
            width={80}
            height={80}
            className="absolute left-[110%] bottom-2 md:block hidden"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
