import { ComponentProps, forwardRef, InputHTMLAttributes } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({...props }: ComponentProps<'input'>, ref) => {
    return (
      <input
        ref={ref}
        className="px-2 py-1 rounded 
        bg-tertiary/95 text-quaternary placeholder:text-secondary hover:bg-tertiary focus:bg-tertiary
        focus:outline-none focus:ring-2 focus:ring-special"
        {...props} />
    );
  }
)
