'use client';

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function WelcomeDashboard() {
    return (
        <Card className="col-span-1 md:col-span-2 lg:col-span-3 card-glass">
          <CardHeader>
            <div>
              <CardTitle className="font-headline text-2xl" style={{color: 'var(--dynamic-text-color)'}}>Welcome to your EvoAvatar Dashboard</CardTitle>
              <CardDescription>Select an option from the sidebar to begin.</CardDescription>
            </div>
          </CardHeader>
        </Card>
    );
}
