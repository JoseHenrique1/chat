import { ComponentProps } from "react";

interface props extends ComponentProps<'header'> {}
export function Header({children} : props ) {
  return ( 
    <div className="bg-primary w-full min-h-14 px-4 border-r border-gray-300  flex items-center justify-between">
        {children}
    </div>
   );
}
