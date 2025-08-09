"use client"
import Benefit from "@/components/Benefit";
import Hero from "@/components/Hero";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import Offer from "@/components/Offer";
import Problem from "@/components/Problem";
import Team from "@/components/Team";
import { Button } from "@/components/ui/button";
import React from "react";
import  {motion}  from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Demo } from "@/components/Demo";
import Steps from "@/components/Steps";

const fadeInUpWithDelay = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut" as any,
    },
  },
});

const page = () => {
  return (
    <div>
      <Hero />
      <Benefit />
      <Steps/>
      <Team />
      {/* <Problem/> */}
      {/* <Offer/> */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex relative flex-col h-[70vh] justify-between items-center text-center rounded-4xl mx-6 md:mx-[6rem] bg-indigo-500 mt-[6rem] mb-[6rem] p-6 md:p-[4rem] text-neutral-800"
      >
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "absolute inset-0 w-full h-full opacity-40",
            "[mask-image:linear-gradient(to_bottom,white_52%,transparent)]",
            "mask-size-100 mask-repeat-no-repeat",
            "pointer-events-none"
          )}
        />
        <motion.div
          variants={fadeInUpWithDelay(0.2)}
          className="space-y-3 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl tracking-tighter font-semibold md:max-w-xl">
            Want to scale your biz organically? Hit now.
          </h1>
          <p className="text-md max-w-md">
            We work with only 2 customers per month to ensure quality of service and results.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUpWithDelay(0.5)}
          className="flex flex-col gap-2 justify-between items-center"
        >
          <Button className="bg-neutral-800 px-6 rounded-full py-6 z-50 hover:cursor-pointer">
            Book a Free Call <ArrowRight className="size-5" />
          </Button>
          <p className="text-xs max-w-lg font-medium z-50">
            Onboarding starts in August. Apply now for free early access and a
            1-hour strategy session with our founding team.
          </p>
        </motion.div>
      </motion.div>
      <Demo/>
    </div>
  );
};

export default page;
