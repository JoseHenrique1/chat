import { ComponentProps } from "react";

export function Input({...props}: ComponentProps<'input'>) {
  return (
    <input 
      className="px-2 py-1 rounded focus:outline-none focus:ring focus:ring-secondary"
      {...props} />
  );
}
