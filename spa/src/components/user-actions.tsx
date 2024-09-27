import { useModal } from '../hooks/useModal'
import { Modal } from './modal'
import { UserProfile } from './actions/user-profile'
import { ConfirmLogout } from './actions/confirm-logout'
import { CreateGroup } from './actions/create-group'
import { AddFriend } from './actions/add-friend'
import { UserDropdown } from './user-dropdown'

export function UserActions() {
  const friendModal = useModal()
  const groupModal = useModal()
  const profileModal = useModal()
  const logoutModal = useModal()

  return (
    <>
      <UserDropdown
        friendModal={friendModal}
        groupModal={groupModal}
        profileModal={profileModal}
        logoutModal={logoutModal}
      />

      <Modal {...friendModal} title="Novo amigo">
        <AddFriend />
      </Modal>
      <Modal {...groupModal} title="Criar grupo">
        <CreateGroup />
      </Modal>
      <Modal {...profileModal} title="Perfil">
        <UserProfile />
      </Modal>
      <Modal {...logoutModal} title="Você deseja sair?">
        <ConfirmLogout />
      </Modal>
    </>
  )
}
