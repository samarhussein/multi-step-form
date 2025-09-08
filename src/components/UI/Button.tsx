import type { ComponentPropsWithoutRef } from "react";

type Button = {
  title: string;
  variant?: "primary" | "secondary";
  className?: string;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  title,
  variant = "primary",
  className = "",
  ...props
}: Button) {
  return (
    <button
      className={`${className} ${
        variant === "primary" ? "btn btn-primary" : "btn btn-secondary"
      }`}
      {...props}
    >
      {title}
    </button>
  );
}
