'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { AvatarTraining } from "@/components/dashboard/AvatarTraining";
import { ChatInterface } from "@/components/dashboard/ChatInterface";
import { DocsPage } from "@/components/dashboard/DocsPage";
import { InviteParticipant } from "@/components/dashboard/InviteParticipant";
import { ProfilePage } from '@/components/dashboard/ProfilePage';
import { WelcomeDashboard } from './WelcomeDashboard';

export function DashboardPageContent() {
  const searchParams = useSearchParams();
  const view = searchParams.get('view');
  
  const renderView = () => {
    switch (view) {
      case "training":
        return <AvatarTraining />;
      case "chat":
        return <ChatInterface />;
      case "docs":
        return <DocsPage />;
      case "invite":
        return <InviteParticipant />;
      case "profile":
        return <ProfilePage />;
      default:
        return <WelcomeDashboard />;
    }
  };

  return <div className="w-full h-full">{renderView()}</div>;
}
