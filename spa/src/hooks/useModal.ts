import { useState } from "react";

export function useModal(title: string) {
  //visibilidade do modal
  const [isOpen, setIsOpen] = useState(false)

  function handleClose() {
    setIsOpen(false)
  }

  function handleOpen() {
    setIsOpen(true)
  }

  return {
    isOpen,
    handleClose,
    handleOpen,
    title
  }
}