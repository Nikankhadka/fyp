'use client'

import { useState } from "react"
import { ErrorText } from "./random"
import {useForm,SubmitHandler} from 'react-hook-form'
import Api from "../api/client/axios"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { Button, Field } from "./ui/primitives"

export default function PasswordReset(){
    
    const router=useRouter();
    const {register,handleSubmit, formState:{ errors }}=useForm<{email:string}>({defaultValues:{
    email:""
    }})
    const onSubmit:SubmitHandler<{email:string}>=(formdata)=>{
        console.log(formdata)
        Api.post(`/auth/v1/forgotPassword/${formdata.email}`).then(()=>{
            toast.success("Please authorize Password Reset Mail send");
            router.refresh()

        }).catch(()=>{
            toast.error("Failed to Verify Email/Please Provide valid mail")
        })
    }
    return(
        <div className="w-full rounded-lg border border-neutral-200 bg-white p-4 shadow-lg sm:w-[560px]">
            <h1 className="text-xl font-semibold text-neutral-950">Forgot Password?</h1>
            <p className="mt-2 text-sm text-themeColor">Enter your email to reset your password.</p>
            <hr className="my-4 border-neutral-200" />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <div>
                    <label className="block text-sm font-semibold text-neutral-800">Email</label>
                    <Field
                        type="email"
                        className="mt-1"
                        {...register('email',{
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                    {errors?.email && (
                        <ErrorText text="Please Enter Valid Email/Formatted Email" />
                    )}
                </div>

                <div className="flex items-center justify-between border-t border-neutral-200 pt-4">
                    <Button type="button" tone="ghost" onClick={() => router.back()}>
                        Cancel
                    </Button>
                    <Button type="submit">
                        Reset Password
                    </Button>
                </div>
            </form>
        </div>
    )
}