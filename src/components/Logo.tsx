
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16"
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <img
          src="/lovable-uploads/cf0a1fae-08e4-48c9-aceb-5ba5a64aa40f.png"
          alt="Little Legends Logo"
          className={cn(
            sizes[size],
            "w-auto transition-transform duration-300 hover:scale-110"
          )}
        />
      </div>
      {showText && (
        <span className={cn(
          "font-baloo font-bold text-ll-purple-dark transition-colors duration-300",
          size === "sm" && "text-lg",
          size === "md" && "text-xl",
          size === "lg" && "text-2xl"
        )}>
          Little Legends Hold Co.
        </span>
      )}
    </div>
  );
};

export default Logo;
