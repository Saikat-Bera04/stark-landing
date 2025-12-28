'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GlowingButton } from '@/components/ui/glowing-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';

export function ProfilePage() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: 'Profile Updated',
            description: 'Your information has been saved successfully.',
        });
    }

  return (
    <div className="space-y-6">
      <Card className="card-glass">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://picsum.photos/seed/user1/200/200" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl font-headline">Max Robinson</CardTitle>
              <CardDescription>max@example.com</CardDescription>
              <p className="text-sm text-muted-foreground">@maxrobinson</p>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="card-glass">
        <CardHeader>
          <CardTitle>Complete Your Profile</CardTitle>
          <CardDescription>
            Help your avatar know you better by providing more details.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Social Media</Label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <Instagram className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="instagram" placeholder="Instagram" className="pl-10 bg-transparent" />
                </div>
                <div className="relative">
                  <Facebook className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="facebook" placeholder="Facebook" className="pl-10 bg-transparent" />
                </div>
                <div className="relative">
                  <Linkedin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="linkedin" placeholder="LinkedIn" className="pl-10 bg-transparent" />
                </div>
                <div className="relative">
                  <Twitter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="twitter" placeholder="X (Twitter)" className="pl-10 bg-transparent" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="profession">Profession</Label>
                    <Input id="profession" placeholder="e.g., Software Engineer" className="bg-transparent" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="hobbies">Hobbies</Label>
                    <Input id="hobbies" placeholder="e.g., Hiking, Painting" className="bg-transparent" />
                </div>
            </div>
             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="interests">Interests</Label>
                    <Input id="interests" placeholder="e.g., AI, Philosophy, Jazz Music" className="bg-transparent" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="fav-color">Favorite Color</Label>
                    <Input id="fav-color" placeholder="e.g., Midnight Blue" className="bg-transparent" />
                </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us a little about yourself..."
                className="min-h-24 resize-none bg-transparent"
              />
            </div>
          </CardContent>
          <CardFooter>
            <GlowingButton type="submit" text="Save Profile" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}