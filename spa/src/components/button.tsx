import { ComponentProps } from "react";

export function Button({ children, ...props }: ComponentProps<'button'>) {
  return (
    <button
      className="px-2 py-1 rounded bg-secondary text-primary"
      {...props}>
      {children}
    </button>
  );
}
