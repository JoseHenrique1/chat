import { Input } from "../input";
import { Button } from "../common/button";
import { useForm, SubmitHandler } from "react-hook-form"
import { useContext } from "react";
import { AuthenticationContext } from "../../contexts/authentication-context";
import { friend } from "../../interfaces/contexts";
import { ContactsContext } from "../../contexts/contacts-context";
interface addFriendInterface {
  email: string
}


export function AddFriend() {
  const { setFriends } = useContext(ContactsContext)
  const { api } = useContext(AuthenticationContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addFriendInterface>()

  function onSubmit(data: addFriendInterface) {
    api.post<{friend: friend}>("/friends", data)
      .then((r) => {
        if (r.status === 200 || r.status === 201) {
          const friend = r.data.friend
          console.log(JSON.stringify(friend));
          
          setFriends(prev => [...prev, friend])
          return
        }
        alert("erro, verifique o email")
      })
      .catch(e => alert("erro, verifique o email"))


  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-2 mt-2'>
      <Input
        type="email"
        {...register("email", {
          required: "Campo obrigatório",
          minLength: {
            value: 10,
            message: "Precisa ter no mínimo 10 caracteres"
          }
        })}
        placeholder='amigo@gmail.com' />
      {errors.email && <p>{errors.email.message}</p>}
      <div className='flex justify-end'>
        <Button type='submit' >Salvar</Button>
      </div>
    </form>
  );
}
