import { Input, Button } from "@headlessui/react";

export function CreateGroup() {
  return (
    <form className='flex flex-col gap-2 mt-2'>
      <Input placeholder='Nome do grupo' />
      <p>selection com os amigos</p>
      <div className='flex justify-end'>
        <Button type='submit' >Salvar</Button>
      </div>
    </form>
  );
}
