import { Input } from "../components/input";
import { Button } from "../components/button";
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { InputsRegistration } from "../interfaces";
import { api } from "../utils/axios";
import { useNavigate } from "react-router-dom";


export function Registration() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsRegistration>()

  const mutation = useMutation({
    mutationFn:async (data: InputsRegistration) => {
      return await api.post("/auth/signup", {...data, img:"default"})
        .then(res=>res.data)
        .catch(()=>null)
    },
  })

  async function onSubmit(data: InputsRegistration) {
    mutation.mutate(data)
  }

  useEffect(()=>{
    if(mutation.isSuccess){
      alert("Usuario cadastrado")
      setTimeout(()=>{
        navigate("/auth/signin")
      }, 3000)
    }
  }, [mutation.isSuccess])

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
          {...register("password", { minLength: 6, required: true })} />
        {errors.password?.type == "required" && <p>Campo obrigatório</p>}
        {errors.password?.type == "minLength" && <p>Precisa ter no mínimo 6 caracteres</p>}
        <Button type="submit">Entrar</Button>
      </form>
    </main>
  );
}
