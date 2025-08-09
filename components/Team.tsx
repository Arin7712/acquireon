"use client";

import {
  ArrowRight,
  Calendar1,
  CircleUserRound,
  IdCard,
  MonitorPlay,
  Trophy,
  UserSearch,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const fadeInVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" as any },
  },
});

const Team = () => {
  return (
    <div className="flex flex-col md:h-screen justify-center text-center items-center px-6 md:px-[8rem] bg-neutral-50 pt-[6rem] py-[6rem] text-neutral-800">
      <motion.div
        variants={fadeInVariant(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex md:flex-row flex-col justify-center md:justify-between pt-4"
      >
        {/* Left Content */}
        <motion.div
          variants={fadeInVariant(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-3 max-w-lg"
        >
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
                  <p>Team</p>
                </div>
              </div>

              <div className="h-[1px] w-20 md:w-32 bg-gradient-to-l from-transparent to-neutral-300"></div>
            </div>{" "}
          </motion.div>
          <motion.h1
            variants={fadeInVariant(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:text-5xl text-4xl font-medium tracking-tighter"
          >
            Meet the team
          </motion.h1>
          <motion.p
            variants={fadeInVariant(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:text-md text-sm text-neutral-700"
          >
            Together, they’re helping 6 figure founders scale their business organically.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="md:w-[60%] flex md:flex-row flex-col gap-6 items-center justify-center text-start md:pt-6 pt-[4rem]">
        {/*Kartik*/}
        <motion.div
          variants={fadeInVariant(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-lg bg-neutral-100 p-6 text-neutral-800 h-fit flex flex-col  border-[1px] border-neutral-300 space-y-2 md:w-[50%]"
        >
          <div className="flex items-center justify-center w-full">
            <Image
              src="/ayman.jpg"
              alt="mock"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>

          <h1 className="text-xl  font-medium">Ayman Mulla</h1>
          <p className="text-sm leading-tight text-neutral-700 md:w-full max-w-xs">
            Ayman's an explorer with a keen eye for trading and business.
          </p>
          <Link
            href="https://www.linkedin.com/in/ayman-mulla-a65277371/"
            className={cn(buttonVariants)}
          >
            <Button className="bg-neutral-800 px-6 mt-2 rounded-full text-sm">
              View
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </motion.div>

        {/*Saumya*/}
        <motion.div
          variants={fadeInVariant(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-lg bg-neutral-100 p-6 text-neutral-800 h-fit flex flex-col  border-[1px] border-neutral-300 space-y-2  md:w-[50%]"
        >
          <div className="flex items-center justify-center w-full">
            <Image
              src="/arin.jpg"
              alt="mock"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-xl font-medium">Arin Gawande</h1>
          <p className="text-sm leading-tight text-neutral-700 max-w-xs">
            Arin's a founder with a passion for building and scaling businesses.
          </p>
          <Link
            href="https://www.linkedin.com/in/arin-gawande-134182316/"
            className={cn(buttonVariants)}
          >
            <Button className="bg-neutral-800 px-6 mt-2 rounded-full text-sm">
              View
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
