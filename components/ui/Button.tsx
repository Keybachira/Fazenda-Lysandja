import Link from "next/link";
import * as React from "react";

type Variant = "primary" | "dark" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--lys-rosa)] text-white hover:bg-[var(--lys-rosa-deep)] border border-transparent",
  dark:
    "bg-[var(--lys-verde)] text-white hover:bg-[var(--lys-verde-mid)] border border-transparent",
  ghost:
    "bg-transparent text-[var(--lys-verde)] hover:bg-[var(--lys-rosa-soft)] border border-transparent",
  outline:
    "bg-transparent text-[var(--lys-verde)] border border-[var(--lys-verde)] hover:bg-[var(--lys-verde)] hover:text-white",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2 text-[11px] tracking-[0.14em]",
  md: "px-7 py-3 text-[11px] tracking-[0.16em]",
  lg: "px-8 py-4 text-[12px] tracking-[0.18em]",
};

function baseClasses(variant: Variant, size: Size) {
  return `inline-flex items-center justify-center rounded-full font-semibold uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lys-rosa)] focus-visible:ring-offset-2 disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]}`;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return <button className={`${baseClasses(variant, size)} ${className}`} {...props} />;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: { href: string; variant?: Variant; size?: Size; className?: string; children: React.ReactNode } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  return (
    <Link href={href} className={`${baseClasses(variant, size)} ${className}`} {...props}>
      {children}
    </Link>
  );
}
