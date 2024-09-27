import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MoreVertical, UserRoundPlus, Users } from 'lucide-react'
import { useModal } from '../hooks/useModal'
import { Modal } from './modal'

export function UserActions() {
  const friendModal = useModal()
  const groupModal = useModal()

  //<Menu __demoMode> ja vem com o dropdown ligado
  return (
    <>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-transparent py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          <MoreVertical size={20} className="cursor-pointer text-quaternary" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-black/90 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <div
              onClick={friendModal.handleOpen}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <UserRoundPlus className="size-4 fill-white/30" />
              Adicionar amigo
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
            </div>
          </MenuItem>
          <MenuItem>
            <button
              onClick={groupModal.handleOpen}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <Users className="size-4 fill-white/30" />
              Criar grupo
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">HAHA</kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>

      <Modal {...friendModal} title="Adicionar amigo">
        Formulario para adicionar amigo
      </Modal>
      <Modal {...groupModal} title="Criar grupo">
        Formulario para criar grupo
      </Modal>
    </>

  )
}
