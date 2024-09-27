import { useContext } from "react";
import { BadgeContext } from "../contexts/badge-context";
import { propsBadge } from "../interfaces";

export function Badge({children}: propsBadge) {
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
