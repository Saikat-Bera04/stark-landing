"use client";

import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Paintbrush } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Paintbrush className="h-5 w-5 text-primary" />
          <span className="sr-only">Change Color Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {colors.map((color) => (
          <DropdownMenuItem key={color.name} onClick={() => setDynamicTextColor(color.value)}>
            <div className="flex items-center gap-2">
              <div 
                className="h-4 w-4 rounded-full border" 
                style={{ backgroundColor: color.value }} 
              />
              <span>{color.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
