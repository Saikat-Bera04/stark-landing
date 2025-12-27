"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundDots = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-transparent">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,#1a1a1a_40%,#A64AC9_100%)]"></div>
        <div className="pointer-events-none absolute inset-0 -z-20 h-full bg-[radial-gradient(circle_farthest-side_at_calc(var(--x,0)px)_calc(var(--y,0)px),#C575E6_0%,transparent_100%)]"></div>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 opacity-20 blur-3xl animate-blob"></div>
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-3xl animate-blob animation-delay-4000"></div>
    </div>
  );
};

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};