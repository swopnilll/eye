import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "bg-teal-500 text-white hover:bg-teal-600",
  outline:
    "border border-brand-200 bg-white text-brand-800 hover:border-brand-500 hover:bg-brand-50",
  ghost: "text-brand-700 hover:bg-brand-50",
  white: "bg-white text-brand-800 hover:bg-brand-50",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = BaseProps &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & { href: string };
type NativeButtonProps = BaseProps & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: LinkButtonProps | NativeButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in rest) {
    return (
      <Link className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
