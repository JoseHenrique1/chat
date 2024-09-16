import { ComponentProps, forwardRef, InputHTMLAttributes } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({...props }: ComponentProps<'input'>, ref) => {
    return (
      <input
        ref={ref}
        className="px-2 py-1 rounded focus:outline-none focus:ring focus:ring-secondary"
        {...props} />
    );
  }
)
