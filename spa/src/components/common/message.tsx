import { Check } from "lucide-react";

import { propsMessage } from "../../interfaces";
export function Message({isFriend, message}: propsMessage) {
  
  return (
    <>
      {
        !isFriend && <div className=" self-end px-4 pt-4 pb-1 bg-special max-w-sm rounded-s-xl rounded-b-xl">
        <p className="text-sm text-quaternary">{message}</p>
        <div className="w-full flex justify-end items-center gap-2 text-xs">
          16:00
          <Check size={20} />
        </div>
      </div>
      }
      {
        isFriend && <div className=" px-4 pt-4 pb-1 bg-tertiary max-w-sm rounded-e-xl rounded-b-xl">
          <p className="text-sm text-quaternary">{message}</p>
          <div className="w-full flex justify-end items-center gap-2 text-xs">
            16:00
            <Check size={20} />
          </div>
        </div>
      }
    </>
  );
}
