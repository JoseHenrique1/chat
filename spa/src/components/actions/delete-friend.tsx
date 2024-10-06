import { Button } from "../common/button";

export function DeleteFriend() {
  return (
    <form className='flex flex-col gap-2 mt-2'>
      <div className='flex justify-between items-center'>
        <p className="text-secondary">Você deseja excluir amigo?</p>
        <Button type='submit' >Sim</Button>
      </div>
    </form>
  );
}
