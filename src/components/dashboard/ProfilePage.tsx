'use client';

import React, { useState } from 'react';
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
  Edit,
  Save,
} from 'lucide-react';
import { Button } from '../ui/button';

interface ProfileData {
    instagram: string;
    facebook: string;
    linkedin: string;
    twitter: string;
    profession: string;
    hobbies: string;
    interests: string;
    favColor: string;
    bio: string;
}


export function ProfilePage() {
    const { toast } = useToast();
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData>({
        instagram: '',
        facebook: '',
        linkedin: '',
        twitter: '',
        profession: '',
        hobbies: '',
        interests: '',
        favColor: '',
        bio: '',
    });
    const [formData, setFormData] = useState<ProfileData>(profileData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({...prev, [id]: value}));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setProfileData(formData);
        setIsEditing(false);
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

      {isEditing ? (
        <Card className="card-glass animate-fade-in">
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
                    <Input id="instagram" placeholder="Instagram" className="pl-10 bg-transparent" value={formData.instagram} onChange={handleInputChange} />
                    </div>
                    <div className="relative">
                    <Facebook className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="facebook" placeholder="Facebook" className="pl-10 bg-transparent" value={formData.facebook} onChange={handleInputChange} />
                    </div>
                    <div className="relative">
                    <Linkedin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="linkedin" placeholder="LinkedIn" className="pl-10 bg-transparent" value={formData.linkedin} onChange={handleInputChange} />
                    </div>
                    <div className="relative">
                    <Twitter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="twitter" placeholder="X (Twitter)" className="pl-10 bg-transparent" value={formData.twitter} onChange={handleInputChange} />
                    </div>
                </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="profession">Profession</Label>
                        <Input id="profession" placeholder="e.g., Software Engineer" className="bg-transparent" value={formData.profession} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="hobbies">Hobbies</Label>
                        <Input id="hobbies" placeholder="e.g., Hiking, Painting" className="bg-transparent" value={formData.hobbies} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="interests">Interests</Label>
                        <Input id="interests" placeholder="e.g., AI, Philosophy, Jazz Music" className="bg-transparent" value={formData.interests} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="favColor">Favorite Color</Label>
                        <Input id="favColor" placeholder="e.g., Midnight Blue" className="bg-transparent" value={formData.favColor} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                    id="bio"
                    placeholder="Tell us a little about yourself..."
                    className="min-h-24 resize-none bg-transparent"
                    value={formData.bio} onChange={handleInputChange}
                />
                </div>
            </CardContent>
            <CardFooter className='justify-between'>
                <Button variant="ghost" onClick={() => setIsEditing(false)}>Cancel</Button>
                <GlowingButton type="submit" text="Save Profile" />
            </CardFooter>
            </form>
        </Card>
      ) : (
        <Card className="card-glass">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Your Profile</CardTitle>
                    <CardDescription>This is the information your avatar knows about you.</CardDescription>
                </div>
                <Button variant="outline" size="icon" onClick={() => setIsEditing(true)}>
                    <Edit className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent>
                {Object.values(profileData).every(val => val === '') ? (
                    <div className='text-center py-12'>
                        <p className='text-muted-foreground mb-4'>Your profile is empty. Complete it to personalize your avatar.</p>
                        <GlowingButton text='Complete Your Profile' onClick={() => setIsEditing(true)} />
                    </div>
                ) : (
                    <div className="space-y-6">
                        {profileData.bio && <p className="text-muted-foreground italic">"{profileData.bio}"</p>}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InfoItem label="Profession" value={profileData.profession} />
                            <InfoItem label="Hobbies" value={profileData.hobbies} />
                            <InfoItem label="Interests" value={profileData.interests} />
                            <InfoItem label="Favorite Color" value={profileData.favColor} />
                        </div>
                        <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Social Media</h4>
                        <div className="flex flex-wrap gap-4">
                            {profileData.instagram && <SocialLink platform="Instagram" handle={profileData.instagram} />}
                            {profileData.facebook && <SocialLink platform="Facebook" handle={profileData.facebook} />}
                            {profileData.linkedin && <SocialLink platform="LinkedIn" handle={profileData.linkedin} />}
                            {profileData.twitter && <SocialLink platform="X (Twitter)" handle={profileData.twitter} />}
                        </div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
      )}
    </div>
  );
}


function InfoItem({ label, value }: { label: string; value?: string }) {
    if (!value) return null;
    return (
        <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="font-semibold text-foreground">{value}</p>
        </div>
    );
}

function SocialLink({ platform, handle }: { platform: string; handle: string }) {
    const icons: { [key: string]: React.ReactNode } = {
        Instagram: <Instagram className="h-4 w-4" />,
        Facebook: <Facebook className="h-4 w-4" />,
        LinkedIn: <Linkedin className="h-4 w-4" />,
        "X (Twitter)": <Twitter className="h-4 w-4" />,
    };

    return (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {icons[platform]}
            <span>{handle}</span>
        </div>
    );
}

    