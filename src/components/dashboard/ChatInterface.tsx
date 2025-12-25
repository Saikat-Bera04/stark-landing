"use client"

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Send } from 'lucide-react';

const initialMessages = [
    { from: 'avatar', text: "Hello! It's great to see you. What's on your mind today?" },
];

export function ChatInterface() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Mock avatar response
    setTimeout(() => {
        setMessages(prev => [...prev, { from: 'avatar', text: "That's interesting. Tell me more." }]);
    }, 1000);
  };

  return (
    <Card className="flex flex-col h-[calc(100vh-10rem)]">
        <CardHeader>
            <CardTitle className="font-headline">Chat with your EvoAvatar</CardTitle>
            <CardDescription>Have a conversation and see how its personality unfolds.</CardDescription>
        </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-3 ${msg.from === 'user' ? 'justify-end' : ''}`}>
            {msg.from === 'avatar' && (
              <Avatar>
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            )}
            <div className={`rounded-lg p-3 max-w-xs md:max-w-md ${msg.from === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
              <p className="text-sm">{msg.text}</p>
            </div>
             {msg.from === 'user' && (
              <Avatar>
                <AvatarImage src="https://picsum.photos/seed/user1/200/200" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
      </CardContent>
      <div className="p-4 border-t">
        <div className="relative">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="pr-12"
          />
          <Button size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8" onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
