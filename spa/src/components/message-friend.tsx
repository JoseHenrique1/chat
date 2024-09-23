import { Check } from "lucide-react";

export function MessageFriend() {
  return (
    <div className="self-end p-2 bg-emerald-200 max-w-sm rounded-s-xl rounded-b-xl">
      <p className="text-sm text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis perspiciatis, commodi dolorem ullam atque porro sapiente unde laborum voluptas laboriosam provident numquam impedit officia quas deleniti natus laudantium explicabo. Eum?</p>
      <div className="w-full flex justify-end items-center gap-2 text-xs">
        16:00
        <Check size={20} />
      </div>
    </div>
  );
}
