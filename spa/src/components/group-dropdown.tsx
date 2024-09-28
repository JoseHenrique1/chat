import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { MoreVertical, UserRoundPlus, UserRoundSearch, LogOut } from "lucide-react";
import { propsGroupDropdown, } from "../interfaces";

export function GroupDropdown({ openAddFriendGroupModal, openExitModal, openGroupProfileModal }: propsGroupDropdown) {
  //<Menu __demoMode> ja vem com o dropdown ligado
  return (
    <Menu>
      <MenuButton className="inline-flex items-center gap-2 rounded-md bg-transparent py-1.5 px-3 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-quaternary/5 data-[open]:bg-quaternary/10 data-[focus]:outline-1 data-[focus]:outline-white">
        <MoreVertical size={20} className="cursor-pointer text-quaternary" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl border border-white/5 bg-primary shadow-md p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <button
            onClick={openGroupProfileModal}
            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 
              data-[focus]:bg-quinternary/50 text-secondary hover:text-quaternary"
          >
            <UserRoundSearch className="size-4 fill-white/30" />
            Ver dados
            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">HAHA</kbd>
          </button>
        </MenuItem>
        <MenuItem>
          <button
            onClick={openAddFriendGroupModal}
            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 
              data-[focus]:bg-quinternary/50 text-secondary hover:text-quaternary"
          >
            <UserRoundPlus className="size-4" />
            Adicionar amigo
            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
          </button>
        </MenuItem>
        <MenuItem>
          <button
            onClick={openExitModal}
            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 
              data-[focus]:bg-quinternary/50 text-secondary hover:text-quaternary"
          >
            <LogOut className="size-4 fill-white/30" />
            Sair
            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">HAHA</kbd>
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
