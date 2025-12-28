"use client"
import { Badge } from "@/components/ui/badge";
import DashboardCard from "@/components/dashboard/card";
import type { SecurityStatus as SecurityStatusType } from "@/types/dashboard";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Bullet } from "@/components/ui/bullet";
import placeholderImages from '@/lib/placeholder-images.json';

const securityStatusItemVariants = cva("border rounded-md ring-4", {
  variants: {
    variant: {
      success: "border-green-500/50 bg-green-500/5 text-green-400 ring-green-500/30",
      warning: "border-yellow-500/50 bg-yellow-500/5 text-yellow-400 ring-yellow-500/30",
      destructive:
        "border-red-500/50 bg-red-500/5 text-red-400 ring-red-500/30",
    },
  },
  defaultVariants: {
    variant: "success",
  },
});

interface SecurityStatusItemProps
  extends VariantProps<typeof securityStatusItemVariants> {
  title: string;
  value: string;
  status: string;
  className?: string;
}

function SecurityStatusItem({
  title,
  value,
  status,
  variant,
  className,
}: SecurityStatusItemProps) {
  return (
    <div className={cn(securityStatusItemVariants({ variant }), className)}>
      <div className="flex items-center gap-2 py-1 px-2 border-b border-current">
        <Bullet size="sm" variant={variant} />
        <span className="text-sm font-medium">{title}</span>
      </div>
      <div className="py-1 px-2.5">
        <div className="text-2xl font-bold mb-1">{value}</div>
        <div className="text-xs opacity-50">{status}</div>
      </div>
    </div>
  );
}

interface SecurityStatusProps {
  statuses: SecurityStatusType[];
}

const securityBotImage = placeholderImages.placeholderImages.find(p => p.id === "security-bot") || {
  imageUrl: "https://picsum.photos/seed/security-bot/1000/1000",
  imageHint: "abstract security"
};


export default function SecurityStatus({ statuses }: SecurityStatusProps) {
  return (
    <DashboardCard
      title="SECURITY STATUS"
      intent="success"
      addon={<Badge variant="outline">ONLINE</Badge>}
    >
      <div className="flex flex-col">
        <div className="max-md:order-1 grid grid-cols-3 md:grid-cols-1 gap-4 py-2 px-1 md:max-w-max">
          {statuses.map((item, index) => (
            <SecurityStatusItem
              key={index}
              title={item.title}
              value={item.value}
              status={item.status}
              variant={item.variant}
            />
          ))}
        </div>
        <div className="md:absolute md:top-0 md:right-0 w-full md:w-auto md:h-full aspect-square min-[2160px]:right-[10%]">
          <Image
            src={securityBotImage.imageUrl}
            alt="Security Status"
            width={1000}
            height={1000}
            quality={90}
            className="size-full object-contain"
            data-ai-hint={securityBotImage.imageHint}
          />
        </div>
      </div>
    </DashboardCard>
  );
}
