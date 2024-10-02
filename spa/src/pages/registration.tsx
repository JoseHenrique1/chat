import { Input } from "../components/input";
import { Button } from "../components/button";
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { InputsRegistration } from "../interfaces";
import { api } from "../utils/axios";
import { useNavigate, Link } from "react-router-dom";
import { NameSite } from "../components/name-site";


export function Registration() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsRegistration>()

  const mutation = useMutation({
    mutationFn: async (data: InputsRegistration) => {
      console.log(data.img);

      return await api.post("/auth/signup", { ...data })
        .then(res => res.data)
        .catch(() => null)
    },
  })

  async function onSubmit(data: InputsRegistration) {
    mutation.mutate(data)
  }

  useEffect(() => {
    if (mutation.isSuccess) {
      alert("Usuario cadastrado")
      setTimeout(() => {
        navigate("/auth/signin")
      }, 3000)
    }
  }, [mutation.isSuccess])

  return (
    <main
      className="min-h-screen min-w-full p-4 flex justify-center items-center authImage">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative backdrop-blur-xl flex flex-col gap-4 bg-secondary/40 w-full p-4 rounded max-w-sm">
        <NameSite />
        <h1 className="text-tertiary text-lg font-semibold">Cadastro</h1>
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

        <select {...register("img")}>
          <option value="default">default</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <Button type="submit">Entrar</Button>
        <p className="text-quinternary">
          Possui conta? <Link to="/auth/signin" className="text-tertiary hover:text-special hover:drop-shadow-sm">Entre</Link>
        </p>
        {mutation.isPending && <p>carregando ...</p>}
      </form>
    </main>
  );
}
