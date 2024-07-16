import { Badge } from "./badge";
import { BadgeContextProvider } from "../contexts/badge-context";

export function BadgeList() {

  const badgesNames = [
    "Tudo",
    "Não lidas",
    "Grupo"
  ]

  return (
    <>
      <BadgeContextProvider>
        {badgesNames.map(name=> <Badge key={name}>{name}</Badge>)}
      </BadgeContextProvider>
    </>
  );
}
