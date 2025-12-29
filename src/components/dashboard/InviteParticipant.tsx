"use client";

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
import { GlowingButton } from "../ui/glowing-button";
import { useToast } from "@/hooks/use-toast";

export function InviteParticipantPage() {
  const { toast } = useToast();

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Feature Not Available",
      description: "Generating invite links is not yet implemented.",
      variant: "destructive",
    });
  };

  return (
    <Card className="card-glass max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="font-headline" style={{color: 'var(--dynamic-text-color)'}}>Invite a Participant</CardTitle>
        <CardDescription>
          You can invite one trusted person to collaborate on training your
          avatar. They will be able to add memories and shape its personality alongside you.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleInvite}>
        <CardContent>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Participant's Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="participant@example.com"
              className="bg-transparent"
            />
          </div>
        </CardContent>
        <CardFooter>
          <GlowingButton type="submit" text="Generate Invite Link" />
        </CardFooter>
      </form>
    </Card>
  );
}
