import { Button } from "../common/button";

export function ExitGroup() {
  return (
    <form className='flex flex-col gap-2 mt-2'>
      <div className='flex justify-between items-center'>
        <p className="text-secondary">Você deseja sair do grupo?</p>
        <Button type='submit' >Sim</Button>
      </div>
    </form>
  );
}
