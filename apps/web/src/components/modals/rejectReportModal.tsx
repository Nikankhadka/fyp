'use client'

import useModal from "../../store/useModal"



import Modal from "./modal"

import { useForm,  } from 'react-hook-form'
import { ErrorText } from "../random"

import useReject from "../../store/useReject"

import { useRouter } from "next/navigation"
import { Button, TextArea } from "../ui/primitives"
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
interface formProps{
    message:string
}


export function MessageModal(){
    const confirmModal=useModal()
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        control,
      } = useForm<formProps>()
      const reject=useReject();
    
    if(confirmModal.isOpen=='reject'){
        
    
    return(
        <>
        <Modal isOpen={confirmModal.isOpen}>
          <div className="w-full rounded-md border border-neutral-200 bg-white p-6 shadow-xl md:w-[550px]">

          <DialogHeader>
            <DialogTitle>{reject.btn}</DialogTitle>
            <DialogDescription>
              Add a clear message so the user understands the decision.
            </DialogDescription>
          </DialogHeader>

          <div className='w-full my-4'>
        <label className='block my-1 text-sm font-semibold'>Message</label>
            <TextArea
            placeholder="message"
            {...register('message', { required: true, minLength:1 })}
          />
          {errors.message && ( <ErrorText text='Please Enter Accept/Reject Message for clarity'/>)}
        </div>



            <hr className="border-gray-400"/>
            <div className=" mt-4 flex items-center justify-end gap-3">
                <Button tone="secondary" type="button"
                onClick={(e)=>{
                    e.preventDefault();
                    confirmModal.onClose()
                }}>Cancel</Button>


                <Button tone="danger" type='submit' onClick={handleSubmit(async(data)=>{

                  //only meessage needs to be passed since id is already access while rendering the model 
                  //and action for the model has beeen set before rendering the modal
                    reject.action.onReject(data.message)
                  
                  
                })}>{reject.btn}</Button>
            </div>

          </div>
        </Modal>
        
        </>
    )}
    return null;
}

