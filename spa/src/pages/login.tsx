import { Input } from "../components/input";
import { Button } from "../components/button";
export function Login() {
  return (
    <main className="min-h-screen min-w-full p-4 flex justify-center items-center">
      <form className="flex flex-col gap-4 bg-slate-400 w-full p-4 rounded max-w-sm">
        <Input type="email" placeholder="nome@gmail.com" />
        <Input type="password" placeholder="min 3" />
        <Button type="submit">Entrar</Button>
      </form>
    </main>
  );
}
