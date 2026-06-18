'use client'

import { Loader2 } from 'lucide-react'
import useModal from '../../store/useModal'
import { Dialog, DialogContent } from '../ui/dialog'

interface ModalProps {
  isOpen?: string
  children?: React.ReactElement
}

function Modal({ isOpen, children }: ModalProps) {
  const modal = useModal()
  const open = isOpen !== 'close'

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          modal.onClose()
        }
      }}
    >
      <DialogContent className="w-[calc(100%-1rem)] max-w-fit border-0 bg-transparent p-0 shadow-none" showClose={false}>
        <div className="relative flex min-h-[120px] items-center justify-center">
          {modal.isLoading && (
            <Loader2 className="absolute bottom-4 h-8 w-8 animate-spin text-themeColor" />
          )}
          <div className="w-full sm:w-auto">{children}</div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
