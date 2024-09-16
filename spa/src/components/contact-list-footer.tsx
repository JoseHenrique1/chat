import { Lock } from "lucide-react";

export function ContactListFooter() {
  return (
    <div className="p-4">
      <p className="text-xs text-center">
        <Lock size={14} className="inline-flex mr-1" />
        Suas mensagens pessoais são protegidas com a
        <a href="#" className="text-blue-400"> criptografia de ponta a ponta</a>
      </p>
    </div>
  );
}
