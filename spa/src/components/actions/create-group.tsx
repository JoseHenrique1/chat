import { Input } from "../input";
import { Button } from "../common/button";
import { FriendCheckbox } from "../friend-checkbox";
import { useForm } from "react-hook-form";
import { CreateGroupForm } from "../../interfaces";
import { useContext } from "react";
import { AuthenticationContext } from "../../contexts/authentication-context";
import { ContactsContext } from "../../contexts/contacts-context";
import { group } from "../../interfaces/contexts";

/* const friends = [
  {
    name: "jose",
    email: "jose@gmail",
  },
  {
    name: "joao",
    email: "joao@gmail",
  },
  {
    name: "maria",
    email: "maria@gmail",
  }
] */

export function CreateGroup() {
  const { api } = useContext(AuthenticationContext)
  const { friends, setGroups } = useContext(ContactsContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateGroupForm>()

  async function onSubmit(data: CreateGroupForm) {
    const response = await api.post<{group: group}>("/groups", {
      name: data.name
    })
    .catch(e=>{
      alert("Verifique sua conexão com a internet")
      return null
    })
    
    response && setGroups(prev=>[...prev, response.data.group])

  }




  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-2 mt-2'>

      <Input
        placeholder='Nome do grupo'
        type="text"
        {...register("name", { required: "Campo obrigatório",  minLength: {
          value: 6,
          message: "Precisa ter no mínimo 6 caracteres"
        } })}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <div className="flex flex-col gap-1 overflow-y-auto">
        {friends.map((friend) => {
          //se usar a string normal o hook form da  um bug
          return <FriendCheckbox key={friend.email} email={friend.email} {...register(`friends.${friend.email.replace(/\./g, "-")}` as const)} />
        })}
      </div>

      <div className='flex justify-end'>
        <Button type='submit' >Salvar</Button>
      </div>
    </form>
  );
}
