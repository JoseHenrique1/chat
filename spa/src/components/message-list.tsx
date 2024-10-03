import { Message } from "./common/message";

const messages = [
  {
    message: "1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sit magnam labore esse consequatur sed debitis, nemo porro neque officia laudantium in omnis, possimus eum explicabo eius quidem culpa? Magni similique consectetur quia ex earum voluptatum deleniti maxime itaque eveniet dolore soluta corporis sunt aliquid esse, fuga accusantium in. Est!",
    isFriend: true,
    id: 1
  },
  {
    message: "2 Lorem ipsum, dolor sit amet consectetur adipisicing eliantium in. Est!",
    isFriend: false,
    id: 2
  },
  {
    message: "3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sit magnam labore esse consequatur sed debitis, nemo porro neque officia laudantium in omnis, possimus eum explicabo eius quidem culpa? Magni similique consectetur quia ex earum voluptatum deleniti maxime itaque eveniet dolore soluta corporis sunt aliquid esse, fuga accusantium in. Est!",
    isFriend: true,
    id: 3
  },

]
export function MessageList() {
  const messagesOrdered = messages.reverse()

  return (
    <div className="messageList flex-grow overflow-y-hidden">
      <div
        className="h-full flex flex-col-reverse gap-4 p-4 overflow-y-scroll">
        {
          messagesOrdered.map((message) => <Message key={message.id} {...message} />)
        }
      </div>
    </div>

  );
}
