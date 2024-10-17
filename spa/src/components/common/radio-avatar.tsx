import { forwardRef } from "react";
import { propsAvatarRadio } from "../../interfaces";

import img from "../../assets/avatars/avatar.jpeg"

export const RadioAvatar = forwardRef<HTMLInputElement, propsAvatarRadio>( ({ avatar, pathImg, ...props }, ref) => {
  return (
    <div className="pb-2">
      <input
        ref={ref} 
        type="radio" 
        className="hidden peer"
        id={avatar}
        value={avatar} 
        {...props}/>
      <label 
        htmlFor={avatar}
        className="flex flex-col items-center rounded border border-primary hover:bg-special/20 peer-checked:bg-special p-1">
        <img 
          src={img} 
          alt="avatar" 
          className="aspect-square rounded-full max-w-20"/>
        <p className="text-quaternary">{avatar}</p>
      </label>
    </div>
  );
}
)