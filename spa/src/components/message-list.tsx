import { Check } from "lucide-react";

export function MessageList() {
  return (
    <div className="messageList flex-grow overflow-y-auto">
      <div className="h-full flex flex-col gap-4 p-4">

        <div className="self-end p-2 bg-emerald-200 max-w-sm rounded-s-xl rounded-b-xl">
          <p className="text-sm text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis perspiciatis, commodi dolorem ullam atque porro sapiente unde laborum voluptas laboriosam provident numquam impedit officia quas deleniti natus laudantium explicabo. Eum?</p>
          <div className="w-full flex justify-end items-center gap-2 text-xs">
            16:00
            <Check size={20} />
          </div>
        </div>

        <div className=" p-2 bg-white max-w-sm rounded-e-xl rounded-b-xl">
          <p className="text-sm text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis perspiciatis, commodi dolorem ullam atque porro sapiente unde laborum voluptas laboriosam provident numquam impedit officia quas deleniti natus laudantium explicabo. Eum?</p>
          <div className="w-full flex justify-end items-center gap-2 text-xs">
            16:00
            <Check size={20} />
          </div>
        </div>
        <div className=" p-2 bg-white max-w-sm rounded-e-xl rounded-b-xl">
          <p className="text-sm text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis perspiciatis, commodi dolorem ullam atque porro sapiente unde laborum voluptas laboriosam provident numquam impedit officia quas deleniti natus laudantium explicabo. Eum?</p>
          <div className="w-full flex justify-end items-center gap-2 text-xs">
            16:00
            <Check size={20} />
          </div>
        </div>
        <div className=" p-2 bg-white max-w-sm rounded-e-xl rounded-b-xl">
          <p className="text-sm text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis perspiciatis, commodi dolorem ullam atque porro sapiente unde laborum voluptas laboriosam provident numquam impedit officia quas deleniti natus laudantium explicabo. Eum?</p>
          <div className="w-full flex justify-end items-center gap-2 text-xs">
            16:00
            <Check size={20} />
          </div>
        </div>
        <div className=" p-2 bg-white max-w-sm rounded-e-xl rounded-b-xl">
          <p className="text-sm text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis perspiciatis, commodi dolorem ullam atque porro sapiente unde laborum voluptas laboriosam provident numquam impedit officia quas deleniti natus laudantium explicabo. Eum?</p>
          <div className="w-full flex justify-end items-center gap-2 text-xs">
            16:00
            <Check size={20} />
          </div>
        </div>

      </div>
    </div>

  );
}
