'use client'

import {
  Calendar1,
  CircleUserRound,
  IdCard,
  MonitorPlay,
  Trophy,
  UserSearch,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const fadeInVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" as any },
  },
});

const Benefit = () => {
  return (
    <div className="flex flex-col items-center h-auto px-6 md:px-[6rem] bg-neutral-0 py-[6rem] text-neutral-800">
      <motion.div
        variants={fadeInVariant(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex items-center justify-center gap-2  z-20">
            <div className="h-[1px] w-20 md:w-32 bg-gradient-to-r from-transparent to-neutral-300"></div>

            <div className="border-r-[2px] border-l-[2px] p-1 rounded-3xl">
              <div className="px-3 pr-4 py-2 rounded-3xl border-[1px] shadow-sm text-sm font-medium flex items-center gap-1">
                <CircleUserRound className="size-5 text-indigo-500" />
                <p>About</p>
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
        className="flex flex-col gap-3 max-w-2xl items-center justify-between text-center pt-4"
      >
        <h1 className="md:text-5xl text-4xl font-medium tracking-tighter">What you get</h1>
        <p className="md:text-md text-sm text-neutral-700">
          Access a complete package of growth and acquisition frameworks.
        </p>
      </motion.div>

      <div className="flex md:flex-row flex-col gap-14 w-full md:max-w-4xl items-center justify-center pt-[4rem]">
        {/* Tangible Tools */}
        <motion.div
          variants={fadeInVariant(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl bg-stone-200 p-4 w-full md:min-w-[40%] hover:cursor-pointer hover:scale-[1.006] duration-300 transition-all"
        >
          <div className="rounded-3xl bg-neutral-900 p-6 text-white min-h-[60vh]">
            <h1 className="text-2xl font-medium tracking-tighter text-center underline underline-offset-4">
              Tangible Tools
            </h1>
            <div className="flex flex-col pt-[2rem] gap-6 text-neutral-400 px-3">
              {[
                {
                  icon: <IdCard className="text-neutral-100" />,
                  title: "Content Creation",
                  desc: "We help you speak to your ICP and drive action.",
                },
                {
                  icon: <MonitorPlay className="text-neutral-100" />,
                  title: "Profile Optimization",
                  desc: "Turn your LinkedIn profile into a powerful sales tool.",
                },
                {
                  icon: <Trophy className="text-neutral-100" />,
                  title: "Outreach",
                  desc: "DMs and connects that boost your leads.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInVariant(0.5 + index * 0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="border-b-[1px] border-neutral-400 pb-2"
                >
                  {item.icon}
                  <div className="pt-3">
                    <p className="text-md text-neutral-200">{item.title}</p>
                    <p className="text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Strategic Support */}
        <motion.div
          variants={fadeInVariant(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl bg-neutral-900 p-4 w-full md:min-w-[40%] hover:cursor-pointer hover:scale-[1.006] duration-300 transition-all"
        >
          <div className="rounded-3xl bg-neutral-100 p-6 text-neutral-800 min-h-[60vh]">
            <h1 className="text-2xl font-medium tracking-tighter text-center underline underline-offset-4">
              Clear Outcomes
            </h1>
            <div className="flex flex-col pt-[2rem] gap-6 p-3">
              {[
                {
                  icon: <UserSearch />,
                  title: "10-12 qualified leads every month",
                  desc: "See your content in action",
                },
                {
                  icon: <Calendar1 />,
                  title: "Higher reach",
                  desc: "Your profile will have more visits and your biz grows",
                },
                                {
                  icon: <Calendar1 />,
                  title: "Higher reach",
                  desc: "Your profile will have more visits and your biz grows",
                },

              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInVariant(0.7 + index * 0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="border-b-[1px] border-neutral-400 pb-2"
                >
                  {item.icon}
                  <div className="pt-3">
                    <p className="text-md">{item.title}</p>
                    <p className="text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefit;
