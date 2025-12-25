"use client";

import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Paintbrush } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const colors = [
  { name: 'Default', value: 'hsl(0 0% 98%)' },
  { name: 'Red', value: 'hsl(0 100% 50%)' },
  { name: 'Orange', value: 'hsl(39 100% 50%)' },
  { name: 'Sky Blue', value: 'hsl(197 71% 73%)' },
  { name: 'Cyan', 'value': 'hsl(180 100% 50%)' },
  { name: 'Pink', value: 'hsl(330 100% 71%)' },
  { name: 'Green', value: 'hsl(120 100% 50%)' },
];

export function ColorSwitcher() {
  const { setDynamicTextColor } = useTheme();

  return (
    <div className="absolute top-20 right-4 md:right-8 z-10 bg-background/50 backdrop-blur-sm p-2 rounded-lg border">
        <div className="flex items-center gap-2">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Paintbrush className="text-primary h-5 w-5" />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Change Website Text Color</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

        {colors.map((color) => (
            <TooltipProvider key={color.name}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => setDynamicTextColor(color.value)}
                            className="h-6 w-6 rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all"
                            style={{ backgroundColor: color.value }}
                            aria-label={`Change text color to ${color.name}`}
                        />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{color.name}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        ))}
        </div>
    </div>
  );
}
