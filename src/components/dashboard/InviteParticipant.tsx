"use client";

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from '@/hooks/use-toast';
import { GlowingButton } from '../ui/glowing-button';

export function InviteParticipant() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    toast({
        title: "Invitation Sent!",
        description: `An invite has been sent to ${email}.`,
    });
    setEmail('');
  };


  return (
    <Card className="card-glass">
      <CardHeader>
        <CardTitle className="font-headline">Invite Your Trusted Partner</CardTitle>
        <CardDescription>
          Your EvoAvatar can only be trained by one other person. Choose someone you trust to help shape its personality.
        </CardDescription>
      </CardHeader>
        <form onSubmit={handleInvite}>
          <CardContent>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Partner's Email</Label>
              <Input 
                type="email" 
                id="email" 
                placeholder="partner@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent"
              />
            </div>
          </CardContent>
          <CardFooter>
            <GlowingButton type="submit" text="Send Invitation" />
          </CardFooter>
        </form>
    </Card>
  );
}
