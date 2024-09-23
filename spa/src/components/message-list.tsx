import { MessageUser } from "./message-user";
import { MessageFriend } from "./message-friend";

export function MessageList() {
  return (
    <div className="messageList flex-grow overflow-y-auto">
      <div className="h-full flex flex-col gap-4 p-4">

        {/* ADICIONAR OS MENSAGENS AQUI */}
        <MessageUser />
        <MessageFriend />

      </div>
    </div>

  );
}
