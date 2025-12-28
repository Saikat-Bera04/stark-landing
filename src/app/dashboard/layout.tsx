import Link from "next/link";
import {
  BrainCircuit,
  Home,
  MessageSquare,
  ScrollText,
  UserPlus,
  Settings,
  ShieldCheck,
} from "lucide-react";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackgroundDots } from "@/components/shared/BackgroundDots";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Dashboard">
                <Link href="/dashboard">
                  <Home />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Train Avatar">
                <Link href="/dashboard?view=training">
                  <BrainCircuit />
                  <span>Train Avatar</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Chat">
                <Link href="/dashboard?view=chat">
                  <MessageSquare />
                  <span>Chat</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Memories">
                <Link href="/dashboard?view=memories">
                  <ScrollText />
                  <span>Memories</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Security">
                <Link href="/dashboard?view=security">
                  <ShieldCheck />
                  <span>Security</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Invite">
                <Link href="/dashboard?view=invite">
                  <UserPlus />
                  <span>Invite Participant</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Settings">
                <Link href="#">
                  <Settings />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <Link href="/signin" className="flex items-center gap-2 p-2">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="https://picsum.photos/seed/user1/200/200" alt="@username" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-left">
                    <span className="text-sm font-medium">User</span>
                    <span className="text-xs text-muted-foreground">user@email.com</span>
                </div>
                </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="relative w-full h-full">
            <BackgroundDots />
            <header className="flex h-14 items-center gap-4 border-b bg-transparent px-4 md:px-6 z-10 relative">
                <SidebarTrigger className="md:hidden" />
                <div className="flex-1">
                    <h1 className="text-lg font-semibold md:text-2xl font-headline">Dashboard</h1>
                </div>
            </header>
            <main className="flex-1 p-4 md:p-6 z-10 relative">{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
