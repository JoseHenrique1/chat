import { useContext } from "react";
import { BadgeContext } from "../contexts/badge-context";

interface props {
  children: string
}
export function Badge({children}: props) {
  const {activated, setActivated} = useContext(BadgeContext);

  function handleSetBadgeSelected () {
    setActivated(children);
  }

  const color = activated == children? "bg-special/30 text-special" : "bg-primary text-secondary";
  const className = color + " text-sm cursor-pointer flex justify-center items-center rounded-full h-8 px-3"
  return ( 
    <div onClick={handleSetBadgeSelected} className={className}>
      {children}
    </div>
  );
}
