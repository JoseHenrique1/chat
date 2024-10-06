import { useModal } from '../hooks/useModal'
import { Modal } from './common/modal'
import { UserProfile } from './actions/user-profile'
import { ConfirmLogout } from './actions/confirm-logout'
import { CreateGroup } from './actions/create-group'
import { AddFriend } from './actions/add-friend'
import { UserDropdown } from './user-dropdown'

export function UserActions() {
  const friendModal = useModal("Novo amigo")
  const groupModal = useModal("Criar grupo")
  const profileModal = useModal("Perfil")
  const logoutModal = useModal("Sair")

  return (
    <>
      <UserDropdown
        openAddFriendModal={friendModal.handleOpen}
        openAddGroupModal={groupModal.handleOpen}
        openUserProfileModal={profileModal.handleOpen}
        openLogoutModal={logoutModal.handleOpen}
      />

      <Modal {...friendModal}>
        <AddFriend />
      </Modal>
      <Modal {...groupModal}>
        <CreateGroup />
      </Modal>
      <Modal {...profileModal}>
        <UserProfile />
      </Modal>
      <Modal {...logoutModal}>
        <ConfirmLogout />
      </Modal>
    </>
  )
}
