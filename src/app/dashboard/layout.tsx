'use client';
import { SidebarDemo } from '@/components/ui/aceternity-sidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-background">
      <SidebarDemo />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 p-4 md:p-6 z-10 relative overflow-y-auto">
          <div className="absolute inset-0 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,#1a1a1a_40%,#007CF0_100%)]"></div>
          <div className="relative z-10">{children}</div>
        </main>
      </div>
    </div>
  );
}
