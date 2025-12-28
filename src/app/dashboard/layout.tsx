'use client';
import { SidebarDemo } from '@/components/ui/aceternity-sidebar';
import { BackgroundDots } from "@/components/shared/BackgroundDots";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-background">
      <SidebarDemo />
       <main className="flex-1 p-4 md:p-6 z-10 relative overflow-y-auto">
        <BackgroundDots />
        <div className="relative z-10">{children}</div>
      </main>
    </div>
  );
}
