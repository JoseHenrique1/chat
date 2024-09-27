import { Input } from "../input";
import { Button } from "../button";

export function CreateGroup() {
  return (
    <form className='flex flex-col gap-2 mt-2'>
      <Input placeholder='Nome do grupo' />
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
      <div className='flex justify-end'>
        <Button type='submit' >Salvar</Button>
      </div>
    </form>
  );
}
