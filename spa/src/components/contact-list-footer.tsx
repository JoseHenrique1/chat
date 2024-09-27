import { Lock } from "lucide-react";

export function ContactListFooter() {
  return (
    <div className="px-4 pb-4">
      <p className="text-xs text-center border-t pt-4 text-quaternary">
        <Lock size={14} className="inline-flex mr-1" />
        Suas mensagens pessoais são protegidas com a
        <a href="#" className="text-special"> criptografia de ponta a ponta</a>
      </p>
    </div>
  );
}
