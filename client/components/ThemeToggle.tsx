import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";
import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  className?: string;
  onToggle?: () => void;
};

export function ThemeToggle({ className, onToggle }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        toggleTheme();
        onToggle?.();
      }}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className={className}
    >
      {isLight ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}
