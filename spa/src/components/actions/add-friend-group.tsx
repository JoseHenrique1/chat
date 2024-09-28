import { Button } from "../button";


export function AddFriendGroup() {
  return (
    <form className='flex flex-col gap-2 mt-2'>
      <h1>Adicionar amigo no grupo</h1>
      <div>
        <div className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">amigo 1</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">amigo 1</label>
        </div>
      </div>
      <Button>Adicionar</Button>
    </form>
  );
}
