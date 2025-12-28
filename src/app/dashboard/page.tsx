'use client';

import { AvatarTraining } from "@/components/dashboard/AvatarTraining";
import { ChatInterface } from "@/components/dashboard/ChatInterface";
import { MemoryList } from "@/components/dashboard/MemoryList";
import { InviteParticipant } from "@/components/dashboard/InviteParticipant";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import SecurityStatus from "@/components/dashboard/SecurityStatus";
import type { SecurityStatus as SecurityStatusType } from "@/types/dashboard";


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

export default function DashboardPage({
  searchParams,
}: {
  searchParams: { view?: string };
}) {
  const { view } = searchParams;
  
  const securityStatuses: SecurityStatusType[] = [
    {
      title: "Core AI",
      value: "Online",
      status: "Nominal",
      variant: "success",
    },
    {
      title: "Memory DB",
      value: "Connected",
      status: "Secure",
      variant: "success",
    },
    {
      title: "API",
      value: "Operational",
      status: "Normal",
      variant: "success",
    },
  ];

  const renderView = () => {
    switch (view) {
      case "training":
        return <AvatarTraining />;
      case "chat":
        return <ChatInterface />;
      case "memories":
        return <MemoryList />;
      case "invite":
        return <InviteParticipant />;
      case "security":
        return <SecurityStatus statuses={securityStatuses} />;
      default:
        return <WelcomeDashboard />;
    }
  };

  return <div className="w-full h-full">{renderView()}</div>;
}
