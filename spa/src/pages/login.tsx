import { Input } from "../components/input";
import { Button } from "../components/common/button";
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { InputsLogin, responseToken } from "../interfaces";
import { api } from "../utils/axios";
import Cookies from "js-cookie";
import { NameSite } from "../components/common/name-site";

export function Login() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsLogin>()

  const mutation = useMutation({
    mutationFn: async (data: InputsLogin) => {
      return await api.post("/auth/signin", data)
        .then((res: responseToken) => res.data)
        .catch(() => null)
    },
  })

  useEffect(() => {
    if (mutation.isSuccess) {
      if (mutation.data) {
        Cookies.set("token", mutation.data?.token)
        setTimeout(() => {
          navigate("/")
        }, 3000)
      }
    }
  }, [mutation.isSuccess])

  async function onSubmit(data: InputsLogin) {
    mutation.mutate(data)
  }

  return (
    <main
      className="min-h-screen min-w-full p-4 flex justify-center items-center  authImage">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative backdrop-blur-xl flex flex-col gap-4 bg-secondary/40 w-full p-4 rounded max-w-sm">

        <NameSite />
        <h1 className="text-tertiary text-lg font-semibold">Login</h1>
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
        <p className="text-quinternary">
          Não possui conta? <Link to="/auth/signup" className="text-tertiary hover:text-special hover:drop-shadow-sm">Cadastre-se</Link>
        </p>
        {mutation.isPending && <p>carregando ...</p>}

      </form>
    </main>
  );
}
