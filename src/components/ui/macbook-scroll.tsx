"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="min-h-[200vh] flex flex-col items-center py-0 md:py-80 justify-start"
    >
      <div
        className="h-[40rem] flex-shrink-0"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.h2
          style={{
            translateY: textTransform,
            opacity: textOpacity,
          }}
          className="dark:text-white text-neutral-800 text-3xl font-bold text-center mb-20"
        >
          {title}
        </motion.h2>
        {/* Lid */}
        <Lid
          src={src}
          scaleX={scaleX}
          scaleY={scaleY}
          rotate={rotate}
          translate={translate}
        />
      </div>
      <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
        {/* keyboard 1 */}
        <div className="h-10 w-full relative">
          <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
        </div>
        <div className="flex relative">
          <div className="mx-auto w-[10%] overflow-hidden h-full">
            <Keyboard />
          </div>
          <div className="mx-auto w-[80%] h-full">
            <Keyboard />
          </div>
          <div className="mx-auto w-[10%] overflow-hidden h-full">
            <Keyboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: any;
  scaleY: any;
  rotate: any;
  translate: any;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
          }}
          className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
        >
          {src ? (
            <Image
              src={src}
              alt="macbook image"
              fill
              className="object-cover object-left-top rounded-lg"
            />
          ) : (
            <div className="h-full w-full bg-black" />
          )}
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
      >
        <div className="absolute inset-0 bg-[#272729] rounded-lg" />
        {src ? (
          <Image
            src={src}
            alt="macbook image"
            fill
            className="object-cover object-left-top rounded-lg"
          />
        ) : (
          <div className="h-full w-full bg-black" />
        )}
      </motion.div>
    </div>
  );
};

export const Keyboard = () => {
  return (
    <div className="w-full h-full bg-[#050505] mx-auto rounded-md overflow-hidden">
      {/* First Row */}
      <Row>
        <KBtn
          className="w-10 "
          children="~"
          side="left"
          children2="`"
        ></KBtn>
        <KBtn className="w-10 " children="!" children2="1"></KBtn>
        <KBtn className="w-10 " children="@" children2="2"></KBtn>
        <KBtn className="w-10 " children="#" children2="3"></KBtn>
        <KBtn className="w-10 " children="$" children2="4"></KBtn>
        <KBtn className="w-10 " children="%" children2="5"></KBtn>
        <KBtn className="w-10 " children="^" children2="6"></KBtn>
        <KBtn className="w-10 " children="&" children2="7"></KBtn>
        <KBtn className="w-10 " children="*" children2="8"></KBtn>
        <KBtn className="w-10 " children="(" children2="9"></KBtn>
        <KBtn className="w-10 " children=")" children2="0"></KBtn>
        <KBtn className="w-10 " children="_" children2="-"></KBtn>
        <KBtn className="w-10 " children="+" children2="="></KBtn>
        <KBtn className="w-10 grow" side="right" children2="delete"></KBtn>
      </Row>

      {/* Second Row */}
      <Row>
        <KBtn className="w-10 grow" side="left" children2="tab"></KBtn>
        <KBtn className="w-10 " children2="Q"></KBtn>
        <KBtn className="w-10 " children2="W"></KBtn>
        <KBtn className="w-10 " children2="E"></KBtn>
        <KBtn className="w-10 " children2="R"></KBtn>
        <KBtn className="w-10 " children2="T"></KBtn>
        <KBtn className="w-10 " children2="Y"></KBtn>
        <KBtn className="w-10 " children2="U"></KBtn>
        <KBtn className="w-10 " children2="I"></KBtn>
        <KBtn className="w-10 " children2="O"></KBtn>
        <KBtn className="w-10 " children2="P"></KBtn>
        <KBtn className="w-10 " children="{" children2="["></KBtn>
        <KBtn className="w-10 " children="}" children2="]"></KBtn>
        <KBtn className="w-10 " children="|" children2="\"></KBtn>
      </Row>

      {/* Third Row */}
      <Row>
        <KBtn
          className="w-10 grow"
          side="left"
          children2="caps lock"
        ></KBtn>
        <KBtn className="w-10 " children2="A"></KBtn>
        <KBtn className="w-10 " children2="S"></KBtn>
        <KBtn className="w-10 " children2="D"></KBtn>
        <KBtn className="w-10 " children2="F"></KBtn>
        <KBtn className="w-10 " children2="G"></KBtn>
        <KBtn className="w-10 " children2="H"></KBtn>
        <KBtn className="w-10 " children2="J"></KBtn>
        <KBtn className="w-10 " children2="K"></KBtn>
        <KBtn className="w-10 " children2="L"></KBtn>
        <KBtn className="w-10 " children='"' children2="'"></KBtn>
        <KBtn className="w-10 grow" side="right" children2="return"></KBtn>
      </Row>
      {/* Fourth Row */}
      <Row>
        <KBtn className="w-10 grow" side="left" children2="shift"></KBtn>
        <KBtn className="w-10 " children2="Z"></KBtn>
        <KBtn className="w-10 " children2="X"></KBtn>
        <KBtn className="w-10 " children2="C"></KBtn>
        <KBtn className="w-10 " children2="V"></KBtn>
        <KBtn className="w-10 " children2="B"></KBtn>
        <KBtn className="w-10 " children2="N"></KBtn>
        <KBtn className="w-10 " children2="M"></KBtn>
        <KBtn className="w-10 " children="<" children2=","></KBtn>
        <KBtn className="w-10 " children=">" children2="."></KBtn>
        <KBtn className="w-10 " children="?" children2="/"></KBtn>
        <KBtn className="w-10 grow" side="right" children2="shift"></KBtn>
      </Row>
      {/* Fifth Row */}
      <Row>
        <KBtn className="w-10 grow" side="left" children2="fn"></KBtn>
        <KBtn className="w-10 grow" children2="control"></KBtn>
        <KBtn className="w-10 grow" children2="option"></KBtn>
        <KBtn className="w-10 grow" side="left" children2="command"></KBtn>
        <KBtn className="w-10 grow-[4]" children2=""></KBtn>
        <KBtn className="w-10 grow" side="right" children2="command"></KBtn>
        <KBtn className="w-10 grow" side="right" children2="option"></KBtn>
        <div className="w-[4.5rem] h-6 mx-0.5 p-0.5 rounded-md flex-col justify-end items-center inline-flex">
          <KBtn className="w-6 h-3 "></KBtn>
          <div className="flex">
            <KBtn className="w-3 h-3 "></KBtn>
            <KBtn className="w-3 h-3 "></KBtn>
            <KBtn className="w-3 h-3 "></KBtn>
          </div>
        </div>
      </Row>
    </div>
  );
};

const KBtn = ({
  className,
  children,
  children2,
  side = "none",
}: {
  className?: string;
  children?: string;
  children2?: string;
  side?: "left" | "right" | "none";
}) => {
  return (
    <div
      className={cn(
        "h-6 w-6 bg-black rounded-md mx-0.5",
        className,
        side === "left" && "items-start",
        side === "right" && "items-end"
      )}
    >
      <div
        className={cn(
          "h-full w-full bg-[#0A090D] rounded-md p-0.5",
          "flex justify-between"
        )}
      >
        <span className="text-white text-[0.3rem] font-extralight uppercase">
          {children}
        </span>
        <span className="text-white text-[0.3rem] font-extralight uppercase">
          {children2}
        </span>
      </div>
    </div>
  );
};

const Row = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full justify-center items-center my-0.5">
      {children}
    </div>
  );
};
