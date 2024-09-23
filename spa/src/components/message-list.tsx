import { Message } from "./message";

export function MessageList() {
  return (
    <div className="messageList flex-grow overflow-y-auto">
      <div className="h-full flex flex-col gap-4 p-4">

        {/* ADICIONAR OS MENSAGENS AQUI */}
        <Message isFriend/>
        <Message />
        <Message isFriend/>

      </div>
    </div>

  );
}
