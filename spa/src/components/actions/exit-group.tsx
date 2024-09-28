import { Button } from "../button";

export function ExitGroup() {
  return (
    <form className='flex flex-col gap-2 mt-2'>
      <div className='flex justify-end'>
        <Button type='submit' >Sim</Button>
      </div>
    </form>
  );
}
