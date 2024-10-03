import { Input } from "../input";
import { Button } from "../common/button";
import { FriendCheckbox } from "../friend-checkbox";
import { useForm } from "react-hook-form";
import { CreateGroupForm } from "../../interfaces";

const friends = [
  {
    id: "1",
    name: "jose",
    email: "jose@gmail",
    selected: false
  },
  {
    id: "2",
    name: "joao",
    email: "joao@gmail",
    selected: true
  },
  {
    id: "3",
    name: "maria",
    email: "maria@gmail",
    selected: false
  }
]

export function CreateGroup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateGroupForm>()

  async function onSubmit(data: CreateGroupForm) {
    console.log(data);

  }


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-2 mt-2'>

      <Input
        {...register("name", { minLength: 3 })}
        placeholder='Nome do grupo' />

      <div className="flex flex-col gap-1 overflow-y-auto">
        {friends.map((friend) => {
          return <FriendCheckbox key={friend.email} email={friend.email} {...register(`friends.${friend.email}`)}/>
        })}
      </div>

      <div className='flex justify-end'>
        <Button type='submit' >Salvar</Button>
      </div>
    </form>
  );
}
