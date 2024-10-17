import {  Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { propsModal } from '../../interfaces'

export function Modal({isOpen, handleClose, title, children}: propsModal) {
  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={handleClose} __demoMode>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-primary p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium text-special">
              {title}
            </DialogTitle>
            <div>
              {children}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
