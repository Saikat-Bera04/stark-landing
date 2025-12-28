"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Home, Bot, MessageSquare, ScrollText, UserPlus, User } from "lucide-react";

const viewMap: { [key: string]: { title: string; icon: React.ReactNode } } = {
  dashboard: { title: "Dashboard", icon: <Home className="h-5 w-5" /> },
  training: { title: "Train Avatar", icon: <Bot className="h-5 w-5" /> },
  chat: { title: "Chat", icon: <MessageSquare className="h-5 w-5" /> },
  memories: { title: "Memories", icon: <ScrollText className="h-5 w-5" /> },
  invite: { title: "Invite Participant", icon: <UserPlus className="h-5 w-5" /> },
  profile: { title: "User Profile", icon: <User className="h-5 w-5" /> },
};

export function DashboardHeader() {
  const searchParams = useSearchParams();
  const [currentView, setCurrentView] = useState({
    title: "Dashboard",
    icon: <Home className="h-5 w-5" />,
  });

  useEffect(() => {
    const view = searchParams.get("view") || "dashboard";
    setCurrentView(viewMap[view] || viewMap.dashboard);
  }, [searchParams]);

  return (
    <header className="flex h-14 items-center bg-neutral-800 px-4 md:px-6">
      <div className="flex items-center gap-3">
        <div className="text-primary">{currentView.icon}</div>
        <h1 className="text-lg font-semibold text-foreground">
          {currentView.title}
        </h1>
      </div>
    </header>
  );
}