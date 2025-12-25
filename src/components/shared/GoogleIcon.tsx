import { cn } from "@/lib/utils";

export const GoogleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn("h-4 w-4", className)}
  >
    <path
      fill="#4285F4"
      d="M21.35 11.1H12.18v2.8h4.99c-.3 1.8-1.7 3.2-3.6 3.2-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8c1.1 0 2.1.4 2.8 1.2l2.2-2.2C17.2 6.4 15 5.3 12.2 5.3c-3.9 0-7 3.1-7 7s3.1 7 7 7c4.1 0 6.7-2.8 6.7-6.8 0-.5 0-1-.1-1.5z"
    ></path>
  </svg>
);
