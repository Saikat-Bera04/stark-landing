
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ChatInterface } from "./ChatInterface";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ChatDialogProps {
    avatar: {
        avatarId: string;
        avatarName: string;
        avatarImageUrl: string;
    };
    isOpen: boolean;
    onClose: () => void;
}

export function ChatDialog({ avatar, isOpen, onClose }: ChatDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] h-[80vh] flex flex-col p-0 gap-0">
          <DialogHeader className="p-4 border-b">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage src={avatar.avatarImageUrl} alt={avatar.avatarName} />
                    <AvatarFallback>{avatar.avatarName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <DialogTitle className="font-headline" style={{color: 'var(--dynamic-text-color)'}}>Chat with {avatar.avatarName}</DialogTitle>
                    <DialogDescription>Review the conversation history.</DialogDescription>
                </div>
            </div>
          </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <ChatInterface />
        </div>
      </DialogContent>
    </Dialog>
  );
}
