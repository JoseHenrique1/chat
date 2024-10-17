import { Minus, Plus } from "lucide-react";
import { useState, forwardRef} from "react";
import { propsFriendCheckbox } from "../interfaces";

export const FriendCheckbox = forwardRef<HTMLInputElement, propsFriendCheckbox>(
  ({ email, ...props }, ref) => {
    const [selected, setSelected] = useState(false);

    function handleToggle() {
      setSelected(e => !e)
    }

    const className = selected ? "flex gap-1 py-1 px-2 rounded text-quaternary bg-quinternary/50" : "flex gap-1 py-1 px-2 rounded text-secondary hover:text-quaternary hover:bg-quinternary/50"
    return (
      <>
        <input
          type="checkbox"
          className="hidden"
          ref={ref}
          id={email}
          name={email}
          {...props}
        />
        <label
          onClick={() => { handleToggle() }}
          className={className}
          htmlFor={email}
        >
          {selected ? <Minus size={18} /> : <Plus size={18} />}
          {email}
        </label>
      </>
    )
  }
)
