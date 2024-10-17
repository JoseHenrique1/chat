import { Button } from "../components/common/button";
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { InputsRegistration } from "../interfaces";
import { api } from "../utils/axios";
import { useNavigate, Link } from "react-router-dom";
import { NameSite } from "../components/common/name-site";
import { RadioAvatar } from "../components/common/radio-avatar";
import { AuthInput } from "../components/auth-input";
import { useCheckToken } from "../hooks/useCheckToken";

export function Registration() {
  useCheckToken()
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
      navigate("/auth/signin")
    }
    if (mutation.isSuccess && !mutation.data) {
      alert("Verifique os dados")
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

        <AuthInput type="name" register={register} errors={errors} />
        <AuthInput type="email" register={register} errors={errors} />
        <AuthInput type="password" register={register} errors={errors} />

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
