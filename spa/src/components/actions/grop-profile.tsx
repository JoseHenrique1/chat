import profileImg from "../../assets/avatars/avatar.jpeg"
export function GroupProfile() {
  return (
    <div>
      <div>
        <img 
          src={profileImg} 
          alt="avatar"
          className="rounded-full mx-auto my-0"  />
      </div>
      <p className="text-center text-lg">Nome grupo</p>
      <p className="text-center">Criado por johndoe@example.com</p>
      <p className="text-center">17 pessoas</p>
    </div> 

  );
}