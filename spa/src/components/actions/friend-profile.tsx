import { useContext } from "react";
import profileImg from "../../assets/avatars/avatar.jpeg"
import { ContactsContext } from "../../contexts/contacts-context";

export function FriendProfile() {
  const {friendSelected} = useContext(ContactsContext)
  
  return (
    <div>
      <div>
        <img 
          src={profileImg} 
          alt="avatar"
          className="rounded-full mx-auto my-0"  />
      </div>
      <p className="text-lg text-center">{friendSelected?.name}</p>
      <p className="text-sm text-center">{friendSelected?.email}</p>
    </div> 
  );
}