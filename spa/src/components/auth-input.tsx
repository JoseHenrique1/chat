import { Input } from "./input"
import { UseFormRegister, FieldErrors } from "react-hook-form"
import { AuthInputs, InputsRegistration, InputsLogin } from "../interfaces"
import { Alert } from "./common/alert"

interface AuthInputInterface {
  type: "email" | "name" | "password"
  register: UseFormRegister<InputsRegistration>
  errors: FieldErrors<InputsRegistration>
}



export function AuthInput({ type, register, errors }: AuthInputInterface) {

  const nameAttributes = {
    type: "text",
    placeholder: "Nome",
    ...register("name", {
      minLength: { value: 3, message: "Precisa ter no mínimo 3 caracteres" },
      required: "Campo obrigatório"
    })
  }
  const emailAttributes = {
    type: "email",
    placeholder: "nome@gmail.com",
    ...register("email", {
      minLength: { value: 10, message: "Precisa ter no mínimo 10 caracteres" },
      required: "Campo obrigatório"
    })
  }
  const passwordAttributes = {
    type: "password",
    placeholder: "min 3",
    ...register("password", {
      minLength: { value: 6, message: "Precisa ter no mínimo 6 caracteres" },
      required: "Campo obrigatório"
    })
  }
  let typeSelected;
  switch (type) {
    case "email":
      typeSelected = emailAttributes
      break;

    case "password":
      typeSelected = passwordAttributes
      break;

    default: //name
      typeSelected = nameAttributes
      break;
  }

  return (
    <div className="w-full bg-secondary">
      <Input {...typeSelected} className="w-full"/>
      {errors[type] && <Alert message={errors[type].message} />}
    </div>
  );
}