import { useContext } from "react";
import { Button } from "../common/button";
import { AuthenticationContext } from "../../contexts/authentication-context";

export function ConfirmLogout() {
  const { handleLogout } = useContext(AuthenticationContext)
  return (
    <form onSubmit={handleLogout} className='flex flex-col gap-2 mt-2'>
      <div className='flex justify-end'>
        <Button type="submit">Sim</Button>
      </div>
    </form>
  );
}
