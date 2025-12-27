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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GlowingButton } from '../ui/glowing-button';

export function InviteParticipant() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const [invited, setInvited] = useState(true); // Mock state, assume already invited for demo

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    toast({
        title: "Invitation Sent!",
        description: `An invite has been sent to ${email}.`,
    });
    setEmail('');
    setInvited(true);
  };


  return (
    <Card className="card-glass">
      <CardHeader>
        <CardTitle className="font-headline">Invite Your Trusted Partner</CardTitle>
        <CardDescription>
          Your EvoAvatar can only be trained by one other person. Choose someone you trust to help shape its personality.
        </CardDescription>
      </CardHeader>
      {invited ? (
        <CardContent>
            <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-secondary/80">
                <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="https://picsum.photos/seed/participant1/200/200" alt="Participant" />
                    <AvatarFallback>P</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">Jane Doe</h3>
                <p className="text-muted-foreground">jane.doe@example.com</p>
                <p className="mt-2 text-sm text-center">Jane is your trusted partner and can co-train your avatar.</p>
                <Button variant="destructive" className="mt-4">Revoke Access</Button>
            </div>
        </CardContent>
      ) : (
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
      )}
    </Card>
  );
}
