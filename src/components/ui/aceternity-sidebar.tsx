'use client';
import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Bot,
  Home,
  MessageSquare,
  ScrollText,
  UserPlus,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Logo } from '../shared/Logo';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

interface SidebarLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const links: SidebarLink[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <Home className="h-5 w-5 shrink-0" />,
  },
  {
    label: 'Train Avatar',
    href: '/dashboard?view=training',
    icon: <Bot className="h-5 w-5 shrink-0" />,
  },
  {
    label: 'Chat',
    href: '/dashboard?view=chat',
    icon: <MessageSquare className="h-5 w-5 shrink-0" />,
  },
  {
    label: 'Memories',
    href: '/dashboard?view=memories',
    icon: <ScrollText className="h-5 w-5 shrink-0" />,
  },
  {
    label: 'Invite Participant',
    href: '/dashboard?view=invite',
    icon: <UserPlus className="h-5 w-5 shrink-0" />,
  },
];

export function SidebarDemo() {
  const [open, setOpen] = useState(false);
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: 'User',
              href: '/signin',
              icon: (
                <Avatar className="h-7 w-7 shrink-0">
                  <AvatarImage src="https://picsum.photos/seed/user1/200/200" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </Link>
  );
};

//Aceternity UI Sidebar
type SidebarProps = {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Sidebar = ({ children, open, setOpen }: SidebarProps) => {
  return (
    <motion.div
      animate={{
        width: open ? '240px' : '80px',
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={cn(
        'relative z-50 flex h-full flex-col justify-between border-r border-neutral-200 bg-gray-100 p-5 transition-all dark:border-neutral-700 dark:bg-neutral-800'
      )}
    >
      {children}
    </motion.div>
  );
};
export const SidebarBody = (props: React.ComponentProps<'div'>) => {
  return (
    <div
      {...props}
      className={cn('flex h-full flex-1 flex-col', props.className)}
    />
  );
};

export const SidebarLink = ({ link }: { link: SidebarLink }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // For dashboard, we check the 'view' param
    if (link.href.includes('?view=')) {
        const view = searchParams.get('view');
        const linkView = new URLSearchParams(link.href.split('?')[1]).get('view');
        setIsActive(view === linkView);
    } else {
         // For the main dashboard link
        setIsActive(pathname === link.href && !searchParams.get('view'));
    }
  }, [pathname, searchParams, link.href]);


  return (
    <Link
      href={link.href}
      className={cn(
        'group/link flex items-center justify-start gap-2 rounded-md px-2 py-2 text-sm text-neutral-700 hover:bg-black/5 dark:text-neutral-200 dark:hover:bg-neutral-700',
        isActive &&
          'bg-black/10 font-medium text-black dark:bg-neutral-700 dark:text-white'
      )}
    >
      {React.cloneElement(link.icon as React.ReactElement, {
        className: cn(
          (link.icon as React.ReactElement).props.className,
          'text-neutral-700 dark:text-neutral-200',
          isActive && 'text-black dark:text-white'
        ),
      })}

      <motion.span
        animate={{
          display: 'inline-block',
          opacity: 1,
          width: 'auto',
        }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
