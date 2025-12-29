'use client';

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

export function WelcomeDashboard() {
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
