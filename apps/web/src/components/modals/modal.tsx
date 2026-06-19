'use client'

import { Loader2 } from 'lucide-react'
import useModal from '../../store/useModal'
import { Dialog, DialogContent } from '../ui/dialog'

interface ModalProps {
  isOpen?: string
  children?: React.ReactElement
  surface?: boolean
  size?: 'auth' | 'md' | 'lg' | 'xl' | 'fit'
}

const modalSizeClasses = {
  auth: 'w-[92vw] sm:w-[460px]',
  md: 'w-[92vw] sm:w-[560px]',
  lg: 'w-[94vw] sm:w-[680px]',
  xl: 'w-[96vw] sm:w-[840px]',
  fit: 'w-[92vw] sm:w-auto sm:max-w-fit',
}

function Modal({ isOpen, children, surface = false, size = 'lg' }: ModalProps) {
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
      <DialogContent
        className={`${modalSizeClasses[size]} max-w-none bg-white p-0 ${surface ? 'border border-outline-variant shadow-xl' : 'border-0 shadow-none'}`}
        showClose={false}
      >
        <div className="relative flex min-h-[120px] items-center justify-center">
          {modal.isLoading && (
            <Loader2 className="absolute bottom-4 h-8 w-8 animate-spin text-primary" />
          )}
          <div className="w-full">{children}</div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
