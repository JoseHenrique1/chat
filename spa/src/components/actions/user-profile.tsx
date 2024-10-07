import { useContext } from "react";
import profileImg from "../../assets/avatars/avatar.jpeg"
import { AuthenticationContext } from "../../contexts/authentication-context";
export function UserProfile() {
  const {user} = useContext(AuthenticationContext)
  return (
    <div>
      <div>
        <img 
          src={profileImg} 
          alt="avatar"
          className="rounded-full mx-auto my-0"  />
      </div>
      <p className="text-lg text-center">{user.name}</p>
      <p className="text-sm text-center">{user.email}</p>
      <button>Edit Profile</button>
      <button>Delete Account</button>
      <button>Logout</button>
    </div> 

  );
}