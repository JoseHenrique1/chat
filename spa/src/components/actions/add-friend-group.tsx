import { FriendsForm } from "../../interfaces";
import { Button } from "../button";
import { useForm } from "react-hook-form";
import { FriendCheckbox } from "../friend-checkbox";

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

export function AddFriendGroup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FriendsForm>()

  async function onSubmit(data: FriendsForm) {
    console.log(data);

  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-2 mt-2'>
      <h1>Adicionar amigo no grupo</h1>
      <div className="flex flex-col gap-1 overflow-y-auto">
        {friends.map((friend) => {
          return <FriendCheckbox key={friend.email} email={friend.email} {...register(`friends.${friend.email}`)} />
        })}
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
