import { Input, Button } from "@headlessui/react";

export function AddFriend() {
  return (
    <form className='flex flex-col gap-2 mt-2'>
      <Input placeholder='amigo@gmail.com' />
      <div className='flex justify-end'>
        <Button type='submit' >Salvar</Button>
      </div>
    </form>
  );
}
