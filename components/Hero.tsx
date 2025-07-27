import React from "react";
import { MoveRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { CoverDemo } from "./CoverDemo";
import { Cover } from "./ui/cover";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative md:px-0 px-3 flex flex-col items-center justify-center text-center h-screen md:h-[95vh] text-neutral-800">
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
      <div className="space-y-5 md:max-w-3xl text-center flex flex-col justify-center items-center z-10 ">
        <div className="flex items-center justify-center gap-4 border-[1px] rounded-full bg-neutral-100 px-4 py-1">
          <h1 className="text-sm md:block hidden">Trusted by 10+ B2B service providers</h1>
                    <h1 className="text-sm md:hidden block">Trusted by 10+ Businesses</h1>
          <div className="flex gap-1">
            <Star className="fill-yellow-300 text-yellow-300 size-4" />
            <Star className="fill-yellow-300 text-yellow-300 size-4" />
            <Star className="fill-yellow-300 text-yellow-300 size-4" />
            <Star className="fill-yellow-300 text-yellow-300 size-4" />
            <Star className="fill-yellow-300 text-yellow-300 size-4" />
          </div>
        </div>
        <h1 className="text-4xl md:text-[2.8rem] font-semibold">
          {/* We Help B2B Services Drive More Leads On <Cover>LinkedIn</Cover> */}
          Targeted LinkedIn Client Aquisiton That Converts <Cover>More Leads</Cover>
        </h1>
        <p className="md:text-lg text-md text-neutral-500 max-w-2xl">
          We help B2B service providers consistently{" "}
          <span className="text-indigo-500 underline">book qualified sales calls </span>
          through targeted LinkedIn client acquisition frameworks.
        </p>
        <div className="flex items-center justify-center gap-6 relative">
          <Button className="bg-indigo-500 px-2 text-md py-6 rounded-full uppercase">
            {" "}
            Book a Free Call
            <MoveRight className="bg-white p-2 rounded-full text-indigo-500 size-8" />
          </Button>
          <Image
            src="/hero-vector.svg"
            alt="hero-vector"
            width={80}
            height={80}
            className="absolute left-[110%] bottom-2 md:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
