import { useModal } from '../hooks/useModal'
import { Modal } from './common/modal'
import { GroupDropdown } from './group-dropdown'
import { GroupProfile } from './actions/grop-profile'
import { AddFriendGroup } from './actions/add-friend-group'
import { ExitGroup } from './actions/exit-group'

export function GroupActions() {
  const friendModal = useModal("Adicionar amigo")
  const profileModal = useModal("Perfil")
  const exitModal = useModal("Sair do grupo")

  return (
    <>
      <GroupDropdown
        openAddFriendGroupModal={friendModal.handleOpen}
        openGroupProfileModal={profileModal.handleOpen}
        openExitModal={exitModal.handleOpen}
      />

      <Modal {...friendModal}>
        <AddFriendGroup />
      </Modal>
      <Modal {...profileModal}>
        <GroupProfile />
      </Modal>
      <Modal {...exitModal}>
        <ExitGroup />
      </Modal>
    </>
  )
}
