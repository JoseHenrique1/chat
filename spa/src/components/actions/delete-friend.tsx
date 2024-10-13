import { useContext } from "react";
import { Button } from "../common/button";
import { ContactsContext } from "../../contexts/contacts-context";
import { AuthenticationContext } from "../../contexts/authentication-context";
import { ResponsiveHomeContext } from "../../contexts/responsive-home-context";

interface friendDeleted {
  friend: {
    id: string,
    emailUser: string,
    emailFriend: string
  }
}
export function DeleteFriend() {
  const { friendSelected, setFriendSelected, setFriends } = useContext(ContactsContext)
  const { handleEnableContact} = useContext(ResponsiveHomeContext)
  const { api } = useContext(AuthenticationContext)

  async function handleDeleteFriend() {
    const response = await api.delete<friendDeleted>(`/friends/${friendSelected?.email}`)
    const { emailFriend } = response.data.friend
    setFriends(prev=>prev.filter(friend=>friend.email!==emailFriend))
    handleEnableContact()
    setFriendSelected(null)
  }
  return (
    <form className='flex flex-col gap-2 mt-2'>
      <div className='flex justify-between items-center'>
        <p className="text-secondary">Você deseja excluir amigo? {friendSelected?.name}</p>
        <Button onClick={handleDeleteFriend} type="button" >Sim</Button>
      </div>
    </form>
  );
}
