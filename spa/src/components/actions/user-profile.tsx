import profileImg from "../../assets/avatars/avatar.jpeg"
export function UserProfile() {
  return (
    <div>
      <div>
        <img 
          src={profileImg} 
          alt="avatar"
          className="rounded-full mx-auto my-0"  />
      </div>
      <p className="text-lg text-center">John Doe</p>
      <p className="text-sm text-center">johndoe@example.com</p>
      <button>Edit Profile</button>
      <button>Delete Account</button>
      <button>Logout</button>
    </div> 

  );
}