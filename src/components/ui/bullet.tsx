'use client';
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const bulletVariants = cva("rounded-full", {
  variants: {
    variant: {
      default: "bg-foreground",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      destructive: "bg-red-500",
    },
    size: {
      default: "h-3 w-3",
      sm: "h-2 w-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface BulletProps extends VariantProps<typeof bulletVariants> {
  className?: string;
}

export function Bullet({ variant, size, className }: BulletProps) {
  return <div className={cn(bulletVariants({ variant, size }), className)} />;
}
