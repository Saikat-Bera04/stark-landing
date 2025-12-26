"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Logo } from './Logo';

const footerLinks = {
    company: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
    ],
    legal: [
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Cookie Policy', href: '#' },
    ],
    social: [
        { name: 'GitHub', href: '#', icon: Github },
        { name: 'Twitter', href: '#', icon: Twitter },
        { name: 'LinkedIn', href: '#', icon: Linkedin },
    ],
    support: [
        { name: 'FAQ', href: '#' },
        { name: 'Contact Us', href: '#' },
    ]
};


export function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const logoY = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
    

    return (
        <footer ref={containerRef} className="relative bg-background border-t mt-auto overflow-hidden">
            <div className="container mx-auto px-6 md:px-8 flex flex-col justify-between pt-24 pb-8">
                <div className="sticky top-0">
                    <motion.div style={{ y: logoY }} className="absolute inset-0 flex items-center justify-center -z-10">
                        <h1 className="text-[30vw] md:text-[25vw] lg:text-[20vw] font-bold text-secondary select-none font-headline">
                           STARK
                        </h1>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Company */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-foreground">Company</h3>
                            <ul className="space-y-2">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Legal */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-foreground">Legal</h3>
                            <ul className="space-y-2">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Social */}
                            <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-foreground">Social</h3>
                            <ul className="space-y-2">
                                {footerLinks.social.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                            <link.icon className="h-4 w-4" />
                                            <span>{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                            {/* Support */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-foreground">Support</h3>
                            <ul className="space-y-2">
                                {footerLinks.support.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
