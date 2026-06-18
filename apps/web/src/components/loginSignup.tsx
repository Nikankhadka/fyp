'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SocialLogin } from './buttons'
import { loginSignupModal } from '../interface/buttons'
import { LoginRegisterInput } from '../interface/request'
import { ErrorText } from './random'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import useModal from '../store/useModal'
import { toast } from 'react-hot-toast'
import Api from '../api/client/axios'
import { X } from 'lucide-react'
import { api } from '../api/api'
import { facebookAuthEnabled, googleAuthEnabled } from '../configs/constant'
import { Button, Field } from './ui/primitives'


export default function LoginSignup({ login,modal }: loginSignupModal): JSX.Element {
  const showSocialLogin = login && (googleAuthEnabled || facebookAuthEnabled)
  
  const {register,handleSubmit,formState: { errors }} = useForm<LoginRegisterInput>()

    const loginSignupModal=useModal();
  const router=useRouter();
  
 

  const onSubmit: SubmitHandler<LoginRegisterInput> = async(data) => {
    console.log(data)
    const {userId,password}=data
    if(login){
      try{
        const res=await Api.post("/auth/v1/login",{userId,password},{withCredentials:true})
      if(res.data.success){
        console.log('login succesful')
          toast.success("Login Successful!")
          router.refresh();
          return loginSignupModal.onClose()
           
          
          
      }
      toast.error(res.data.error)
      return  router.push('/Home')
      }catch(e){
        toast.error("Login Failed/Invalid Credential/UserBanned")
        return  router.push('/Home')
      }
      
    }

    //for signup
    try{
    const res=await Api.post("/auth/v1/registerUser",{userId,password},{withCredentials:true})
    if(res.data.success){
     
      toast.success("User Registeres Successfully!")
     return  loginSignupModal.onOpen('login')
      
    }

    throw new Error(`${res.data.error}`)
    }catch(e:any){
     return  toast.error(e.message);
      
    }
    
   
  }


  return (
    <div className="flex w-full flex-col items-center rounded-lg border border-neutral-200 bg-white shadow-lg md:w-[540px]">
      <div className="flex w-full items-center border-b border-neutral-200 p-4">
        <p className="w-11/12 text-center text-lg font-semibold text-mainColor">
          {login ? 'Log in' : 'Sign up'}
        </p>
        
        {modal && (
          <button
            className="rounded-full p-1 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700"
            onClick={(e) => {
              e.preventDefault();
              loginSignupModal.onClose()
            }}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      <div className="w-full p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <p className="text-xl font-semibold text-mainColor">
            Welcome to MeroGhar
          </p>

          <div>
            <Field
              type="text"
              placeholder="userId"
              {...register('userId', { required: true, minLength: 4 })}
            />
            {errors.userId && <ErrorText text='Please Enter Valid UserId' />}
          </div>

          <div>
            <Field
              type="password"
              placeholder="password"
              {...register('password', {
                required: true,
                minLength: 4,
              })}
            />
            {errors.password && <ErrorText text="Please Enter Valid Password" />}
          </div>

          {login && (
            <Link
              href="/Home/forgotpassword"
              className="text-sm text-mainColor hover:underline"
            >
              Forgot Password?
            </Link>
          )}

          <Button type="submit" className="w-full">
            {login ? 'Log in' : 'Sign up'}
          </Button>

          {showSocialLogin && (
            <>
              <div className="flex w-full items-center justify-center">
                <hr className="my-4 w-[44%] border border-neutral-300" />
                <span className="text-sm mx-2 text-neutral-500">or</span>
                <hr className="my-4 w-[44%] border border-neutral-300" />
              </div>

              {googleAuthEnabled && (
                <SocialLogin
                  placeholder="Continue with Google"
                  url={`${api}/auth/v1/google-login`}
                  img="/google.png"
                />
              )}
              {facebookAuthEnabled && (
                <SocialLogin
                  placeholder="Continue with Facebook"
                  url={`${api}/auth/v1/facebook-login`}
                  img="/facebook.png"
                />
              )}
            </>
          )}

          <div className="flex w-full items-center justify-center text-sm">
            <span className="text-neutral-600">
              {login ? "Don't Have Account?" : 'Have Account?'}{' '}
              {!modal && (
                <Link
                  href={login ? '/signup' : '/login'}
                  className="text-mainColor hover:underline"
                >
                  {login ? 'Sign Up' : 'Login'}
                </Link>
              )}

              {modal && (
                <button
                  className="text-mainColor hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    if(login){
                      loginSignupModal.onOpen('signup')
                      return;
                    }
                    loginSignupModal.onOpen('login')
                  }}
                >
                  {login ? 'Sign Up' : 'Login'}
                </button>
              )}
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}