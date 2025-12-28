'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { AvatarTraining } from "@/components/dashboard/AvatarTraining";
import { ChatInterface } from "@/components/dashboard/ChatInterface";
import { DocsPage } from "@/components/dashboard/DocsPage";
import { InviteParticipant } from "@/components/dashboard/InviteParticipant";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import { ProfilePage } from '@/components/dashboard/ProfilePage';


function WelcomeDashboard() {
    return (
        <Card className="col-span-1 md:col-span-2 lg:col-span-3 card-glass">
          <CardHeader>
            <div className="flex items-center gap-4">
              <BrainCircuit className="h-10 w-10 text-primary" />
              <div>
                <CardTitle className="font-headline text-2xl">Welcome to your EvoAvatar Dashboard</CardTitle>
                <CardDescription>Select an option from the sidebar to begin.</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
    );
}

function DashboardPageContent() {
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


export default function DashboardPage() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <DashboardPageContent />
    </React.Suspense>
  );
}
