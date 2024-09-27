import { Check } from "lucide-react";

import { propsMessage } from "../interfaces";
export function Message({isFriend}: propsMessage) {
  
  return (
    <>
      {
        isFriend && <div className="self-end p-2 bg-special max-w-sm rounded-s-xl rounded-b-xl">
        <p className="text-sm text-quaternary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis perspiciatis, commodi dolorem ullam atque porro sapiente unde laborum voluptas laboriosam provident numquam impedit officia quas deleniti natus laudantium explicabo. Eum?</p>
        <div className="w-full flex justify-end items-center gap-2 text-xs">
          16:00
          <Check size={20} />
        </div>
      </div>
      }
      {
        !isFriend && <div className=" p-2 bg-tertiary max-w-sm rounded-e-xl rounded-b-xl">
          <p className="text-sm text-quaternary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis perspiciatis, commodi dolorem ullam atque porro sapiente unde laborum voluptas laboriosam provident numquam impedit officia quas deleniti natus laudantium explicabo. Eum?</p>
          <div className="w-full flex justify-end items-center gap-2 text-xs">
            16:00
            <Check size={20} />
          </div>
        </div>
      }
    </>
  );
}
