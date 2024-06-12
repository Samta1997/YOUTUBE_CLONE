import { MdClose } from "react-icons/md";
import {GoogleLogin} from "@react-oauth/google"

const SignInForm = ({handleSignInClick}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-black relative left-64 bottom-5 font-xl" onClick={handleSignInClick}>
                <MdClose className="text-2xl"/>
            </div>
           
          <h1 className="text-3xl font-bold text-black mb-6 text-center">Sign In</h1>
          <div className='text-black'>
            <form>
                <div className='flex items-center'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Email' className='ml-10 p-1 border-2 border-slate-500'/> 
                </div>
                <div className='flex  items-center  gap-3 my-8'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Password' className='p-1  border-2 border-slate-500'/>
                </div>
               
            </form>
                

          </div>
          <div className="mb-4">
            <button className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l   hover:from-pink-500 hover:to-yellow-500 rounded-lg  text-white font-bold py-2 px-4 rounded w-full">
              Sign In
            </button>
          </div>
          <div className="flex flex-col items-center ">
            <h3 className="text-black mb-4">OR</h3>
            <div>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                    onSuccess(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />;
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default SignInForm