import { Badge } from "./common/badge"

export function BadgeList() {
  const badgesNames = [
    "Amigos",
    "Não lidas",
    "Grupos"
  ]

  return (
    <>
  
        {badgesNames.map(name=> <Badge key={name}>{name}</Badge>)}
     
    </>
  );
}
