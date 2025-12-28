export function ColorChangingDots() {
  return (
    <div className="flex space-x-1.5 h-8 w-8 items-center justify-center">
      <span className="h-2.5 w-2.5 rounded-full animate-color-change-1"></span>
      <span className="h-2.5 w-2.5 rounded-full animate-color-change-2"></span>
      <span className="h-2.5 w-2.5 rounded-full animate-color-change-3"></span>
    </div>
  );
}
