'use client'

import useModal from "../../store/useModal"

import useConfirm from "../../store/useConfirm";

import Modal from "./modal"
import { Button } from "../ui/primitives";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

export function ConfirmModal(){
    const modal=useModal()
    const confirm=useConfirm();
    if(modal.isOpen!='confirm'){
        return null;
    }
    return(
        <>
        <Modal isOpen={modal.isOpen}>
              
        <div className="w-full rounded-md border border-neutral-200 bg-white p-6 shadow-xl md:w-[570px]">
            <DialogHeader>
              <DialogTitle>{confirm.content.header}</DialogTitle>
              <DialogDescription>
                This action will apply immediately after confirmation.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-8 flex justify-end gap-3">
              <Button tone="secondary" type="button" onClick={() => modal.onClose()}>
                Cancel
              </Button>
              <Button tone={confirm.content.actionBtn=='Delete' ? 'danger' : 'primary'} type="button"
              onClick={(e)=>{
                e.preventDefault();
                confirm.content.onAction();
              }}
              >
                {confirm.content.actionBtn}
              </Button>
            </div>
          </div>
        </Modal>
        
        </>
    )
}
