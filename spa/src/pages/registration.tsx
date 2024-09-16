import { Input } from "../components/input";
import { Button } from "../components/button";
import { useForm } from "react-hook-form"

import { InputsRegistration } from "../interfaces";
const api = import.meta.env.VITE_API

export function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsRegistration>()

  async function onSubmit(data: InputsRegistration) {
    alert(JSON.stringify(data))
  }

  return (
    <main
      className="min-h-screen min-w-full p-4 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 bg-slate-400 w-full p-4 rounded max-w-sm">

        <Input
          type="text"
          placeholder="Nome"
          {...register("name", { minLength: 3, required: true })} />
        {errors.name?.type == "required" && <p>Campo obrigatório</p>}
        {errors.name?.type == "minLength" && <p>Precisa ter no mínimo 3 caracteres</p>}
        <Input
          type="email"
          placeholder="nome@gmail.com"
          {...register("email", { minLength: 10, required: true })} />
        {errors.email?.type == "required" && <p>Campo obrigatório</p>}
        {errors.email?.type == "minLength" && <p>Precisa ter no mínimo 10 caracteres</p>}
        <Input
          type="password"
          placeholder="min 3"
          {...register("password", { minLength: 3, required: true })} />
        {errors.password?.type == "required" && <p>Campo obrigatório</p>}
        {errors.password?.type == "minLength" && <p>Precisa ter no mínimo 3 caracteres</p>}
        <Button type="submit">Entrar</Button>
      </form>
    </main>
  );
}
