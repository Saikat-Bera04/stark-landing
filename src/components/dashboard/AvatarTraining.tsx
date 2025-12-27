"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { createMemory } from "@/ai/flows/evolving-avatar-memories";
import { GlowingButton } from "../ui/glowing-button";

export function AvatarTraining() {
    const { toast } = useToast();
    const [text, setText] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRecording, setIsRecording] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;

        setIsSubmitting(true);
        try {
            await createMemory({ text });
            toast({
                title: "Memory Created",
                description: "Your avatar has learned something new.",
            });
            setText("");
        } catch (error) {
            console.error("Failed to create memory:", error);
            toast({
                title: "Error",
                description: "Failed to create memory. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const handleVoiceClick = () => {
        // Mock voice recording functionality
        setIsRecording(!isRecording);
        if(!isRecording) {
            toast({
                title: "Recording Started",
                description: "Voice input is not yet implemented. This is a UI demo.",
            });
        } else {
             toast({
                title: "Recording Stopped",
                description: "Voice processing would happen here.",
            });
        }
    }

  return (
    <Card className="card-glass">
      <CardHeader>
        <CardTitle className="font-headline">Train Your Avatar</CardTitle>
        <CardDescription>
          Add new memories, opinions, or facts for your avatar to learn. Use text or your voice.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Textarea
            placeholder="Share a thought, a feeling, or a memory... e.g., 'I've recently started enjoying jazz music, especially Miles Davis.'"
            className="min-h-48 resize-none bg-transparent"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isSubmitting || isRecording}
          />
        </CardContent>
        <CardFooter className="flex justify-between">
            <div>
                <Button type="button" variant={isRecording ? 'destructive' : 'outline'} size="icon" onClick={handleVoiceClick} disabled={isSubmitting}>
                    <Mic className="h-4 w-4" />
                    <span className="sr-only">Use Voice</span>
                </Button>
                {isRecording && <span className="ml-2 text-sm text-destructive animate-pulse">Recording...</span>}
            </div>
            <GlowingButton type="submit" text="Create Memory" />
        </CardFooter>
      </form>
    </Card>
  );
}
