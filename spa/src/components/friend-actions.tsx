import { useModal } from '../hooks/useModal'
import { Modal } from './modal'
import { FriendDropdown } from './friend-dropdown'
import { FriendProfile } from './actions/friend-profile'
import { DeleteFriend } from './actions/delete-friend'

export function FriendActions() {
  const friendModal = useModal("Perfil do amigo")
  const deleteModal = useModal("Você deseja excluir amigo?")

  return (
    <>
      <FriendDropdown
        openFriendProfileModal={friendModal.handleOpen}
        openDeleteFriendModal={deleteModal.handleOpen}
      />

      <Modal {...friendModal}>
        <FriendProfile />
      </Modal>
      <Modal {...deleteModal}>
        <DeleteFriend />
      </Modal>
    </>
  )
}
