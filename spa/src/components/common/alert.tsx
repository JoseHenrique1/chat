import { propsAlert } from "../../interfaces";

export function Alert({ message }: propsAlert) {
  return (
    <p className="text-sm text-orange-400 font-bold">
      {message}
    </p>
  );
}