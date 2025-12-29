'use client';
import { SidebarDemo } from '@/components/ui/aceternity-sidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import React from 'react';
import Image from 'next/image';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full">
      <div className="fixed inset-0 z-0">
        <Image
          src="https://i.pinimg.com/originals/3b/70/46/3b70462c1f10b9ec7be8698df997111d.gif"
          alt="Dashboard background"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 flex h-full w-full">
        <SidebarDemo />
        <div className="flex flex-1 flex-col overflow-hidden bg-transparent">
          <DashboardHeader />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
