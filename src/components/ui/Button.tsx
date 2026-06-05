import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all rounded-xl",
          // sizes
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-sm",
          size === "lg" && "px-8 py-4 text-base",
          // variants
          variant === "primary"   && "btn-glow bg-[#00D46A] text-black hover:bg-[#00B558]",
          variant === "secondary" && "bg-[#111914] border border-[#1E2B22] text-white hover:border-[#00D46A]/40",
          variant === "ghost"     && "text-[#8FAF9B] hover:text-white hover:bg-white/5",
          variant === "outline"   && "border border-[#00D46A]/50 text-[#00D46A] hover:bg-[#00D46A]/10",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export default Button;
