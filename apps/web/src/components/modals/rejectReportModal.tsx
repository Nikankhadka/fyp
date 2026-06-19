'use client'

import useModal from "../../store/useModal"

import useReject from "../../store/useReject"

import { useRouter } from "next/navigation"
import { useForm } from 'react-hook-form'
import { Button, TextArea, Field } from "../ui/primitives"
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import Modal from "./modal"

interface formProps{
    message:string
}

export function MessageModal(){
    const confirmModal=useModal()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<formProps>()
    const reject=useReject()

    if(confirmModal.isOpen=='reject'){
        return(
            <Modal isOpen={confirmModal.isOpen}>
              <div className="w-full rounded-md border border-neutral-200 bg-white p-6 shadow-xl md:w-[550px]">

              <DialogHeader>
                <DialogTitle>{reject.btn}</DialogTitle>
                <DialogDescription>
                  Add a clear message so the user understands the decision.
                </DialogDescription>
              </DialogHeader>

              <div className='my-4'>
                <label htmlFor="message" className="mb-1 block text-sm font-semibold">
                  Message
                </label>
                <TextArea
                  id="message"
                  placeholder="message"
                  {...register('message', { required: true, minLength: 1 })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-700">
                    Please enter an accept/reject message for clarity.
                  </p>
                )}
              </div>

                <div className="mt-4 flex items-center justify-end gap-3">
                    <Button tone="secondary" type="button" onClick={() => confirmModal.onClose()}>
                      Cancel
                    </Button>

                    <Button tone="danger" type='button' onClick={handleSubmit(async(data) => {
                        reject.action.onReject(data.message)
                    })}>
                      {reject.btn}
                    </Button>
                </div>

              </div>
            </Modal>
        )
    }
    return null
}
