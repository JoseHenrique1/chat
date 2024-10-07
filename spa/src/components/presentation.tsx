import { useContext } from "react";
import { AuthenticationContext } from "../contexts/authentication-context";

export function Presentation() {
  const {user} = useContext(AuthenticationContext)
  return (
    <div className="w-full flex justify-center items-start pt-16">
      <div className="backdrop-blur-xl p-4 rounded-md border lg:py-8 lg:px-12">
        <h1 className="text-tertiary text-4xl lg:text-6xl">Olá, <span className="text-special">{user.name}</span> </h1>
        <p className="text-tertiary/85 font-medium text-lg">Abra um contato e inicie uma conversa!</p>
      </div>
    </div>
  );
}
