'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva("", {
  variants: {
    intent: {
      default: "border-border",
      success: "border-green-500/50",
      warning: "border-yellow-500/50",
      destructive: "border-red-500/50",
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

interface DashboardCardProps extends VariantProps<typeof cardVariants> {
  title: string;
  description?: string;
  addon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function DashboardCard({
  title,
  description,
  addon,
  children,
  intent,
  className,
}: DashboardCardProps) {
  return (
    <Card className={cn("card-glass", cardVariants({ intent }), className)}>
      <CardHeader>
        <div className="flex justify-between items-center">
            <CardTitle className="font-headline">{title}</CardTitle>
            {addon}
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
