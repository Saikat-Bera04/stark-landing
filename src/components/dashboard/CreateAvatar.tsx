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
import Image from 'next/image';

export function CreateAvatarPage() {
  const [prompt, setPrompt] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const { toast } = useToast();

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) {
        toast({
            title: "Prompt is empty",
            description: "Please describe the avatar you want to create.",
            variant: "destructive",
        });
        return;
    };

    // Mock generation
    toast({
        title: "Generating Avatar...",
        description: `Creating an avatar based on: "${prompt}"`,
    });
    
    // Placeholder image
    setTimeout(() => {
        setAvatarUrl(`https://picsum.photos/seed/${prompt.replace(/\s/g, '-')}/512/512`);
        toast({
            title: "Avatar Generated!",
            description: "Your new avatar is ready.",
        });
    }, 2000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
        <Card className="card-glass">
            <CardHeader>
                <CardTitle className="font-headline" style={{color: 'var(--dynamic-text-color)'}}>Create Your Avatar's Look</CardTitle>
                <CardDescription>
                Describe the visual appearance of your EvoAvatar. Be as detailed or as simple as you like.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleGenerate}>
                <CardContent>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="prompt">Avatar Description</Label>
                    <Input 
                    type="text" 
                    id="prompt" 
                    placeholder="e.g., A futuristic robot with glowing blue eyes" 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="bg-transparent"
                    />
                </div>
                </CardContent>
                <CardFooter>
                <GlowingButton type="submit" text="Generate Avatar" />
                </CardFooter>
            </form>
        </Card>
        <Card className="card-glass flex items-center justify-center">
            <CardContent className="p-6">
                {avatarUrl ? (
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-2 border-primary shadow-2xl shadow-primary/20">
                        <Image src={avatarUrl} alt="Generated Avatar" fill className="object-cover" />
                    </div>
                ) : (
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg bg-secondary/20 flex items-center justify-center text-muted-foreground text-center p-4">
                        Your generated avatar will appear here.
                    </div>
                )}
            </CardContent>
        </Card>
    </div>
  );
}
