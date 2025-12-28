"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const bulletVariants = cva("rounded-full", {
  variants: {
    variant: {
      success: "bg-green-500",
      warning: "bg-yellow-500",
      destructive: "bg-red-500",
      secondary: "bg-gray-400",
    },
    size: {
      sm: "h-2 w-2",
      md: "h-3 w-3",
    },
    animated: {
      true: "animate-pulse",
      false: "",
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "md",
    animated: false,
  },
});

interface BulletProps extends VariantProps<typeof bulletVariants> {
  className?: string;
}

export function Bullet({ variant, size, animated, className }: BulletProps) {
  return <div className={cn(bulletVariants({ variant, size, animated, className }))} />;
}
