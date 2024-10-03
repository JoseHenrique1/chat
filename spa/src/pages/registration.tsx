import { Input } from "../components/input";
import { Button } from "../components/button";
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { InputsRegistration } from "../interfaces";
import { api } from "../utils/axios";
import { useNavigate, Link } from "react-router-dom";
import { NameSite } from "../components/name-site";
import { RadioAvatar } from "../components/radio-avatar";
import { Alert } from "../components/common/alert";

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
    if (mutation.isSuccess && mutation.data) {
      alert("Usuario cadastrado")
      setTimeout(() => {
        navigate("/auth/signin")
      }, 3000)
    }
  }, [mutation.isSuccess])

  const avatars = [
    {
      type: "default",
      pathImg: ""
    },
    {
      type: "male",
      pathImg: ""
    },
    {
      type: "female",
      pathImg: ""
    },
    {
      type: "ninja",
      pathImg: ""
    },
    {
      type: "lion",
      pathImg: ""
    },
    {
      type: "wolf",
      pathImg: ""
    },
    {
      type: "zombie",
      pathImg: ""
    },
    {
      type: "pirate",
      pathImg: ""
    },
    {
      type: "princess",
      pathImg: ""
    },
  ]

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
          {...register("name", {
            minLength: { value: 3, message: "Precisa ter no mínimo 3 caracteres" },
            required: "Campo obrigatório"
          })} />
        {errors.name && <Alert message={errors.name.message} />}
        <Input
          type="email"
          placeholder="nome@gmail.com"
          {...register("email", {
            minLength: { value: 10, message: "Precisa ter no mínimo 10 caracteres" },
            required: "Campo obrigatório"
          })} />
        {errors.email && <Alert message={errors.email.message} />}
        <Input
          type="password"
          placeholder="min 3"
          {...register("password", {
            minLength: { value: 6, message: "Precisa ter no mínimo 6 caracteres" },
            required: "Campo obrigatório"
          })} />
        {errors.password && <Alert message={errors.password.message} />}

        <div className="h-56 overflow-y-auto radioScroll">
          <div className="columns-3 gap-4">
            {avatars.map(avatar => (
              <RadioAvatar
                key={avatar.type}
                avatar={avatar.type}
                pathImg={avatar.pathImg}
                {...register("img")} />
            ))}
          </div>
        </div>

        <Button type="submit">Cadastrar</Button>
        <p className="text-quinternary">
          Possui conta? <Link to="/auth/signin" className="text-tertiary hover:text-special hover:drop-shadow-sm">Entre</Link>
        </p>
        {mutation.isPending && <p>carregando ...</p>}
      </form>
    </main>
  );
}
