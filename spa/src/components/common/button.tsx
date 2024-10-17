import { ComponentProps } from "react";

export function Button({ children, ...props }: ComponentProps<'button'>) {
  return (
    <button
      className="px-2 py-1 rounded bg-special text-primary font-medium hover:bg-special/80 active:bg-special/60"
      {...props}>
      {children}
    </button>
  );
}
