import { VscClearAll } from "react-icons/vsc";
import ShowVideoGridCol from "../ShowVideoGrid/ShowVideoGridCol";
import SignInForm from "../../Components/SignInForm/SignInForm";
import { useState } from "react";


const WHL = ({page, vids}) => {
  const [showSignInForm, setShowSignInForm] = useState(false);
  const handleSignInClick = () => { //used when clicking on sign in is clicked
    setShowSignInForm(!showSignInForm);
  };

     const CurrentUser=null;
  // const CurrentUser = {
  //   result: {
  //     email: "abzxy50312@gmail.com",
  //     joinedOn: "2222-07-15T09:57:23.489Z",
  //   },
  // };
 
  return (
    <div className="">
      {CurrentUser && <div className='flex w-full justify-between flex-wrap'>
        <div className='flex  w-[100%]  md:w-[60%] justify-center'>
            <div className="flex-col">
              <div className='flex'>
                <h1 className='font-bold mb-4 lg:text-3xl md:text-3xl sm:text-xl text-lg ml-2'>Your {page} is shown here</h1>
              </div>
              {page==="History"  && 
                <div className='flex justify-center items-center mt-8 mb-8 hover:text-red-600 lg:text-3xl md:text-2xl sm:text-xl'>
                    <h2 className='font-bold cursor-pointer mr-4 '>Clear History</h2>
                    <VscClearAll className="mt-1"/>
                </div>
                }
            </div>     
        </div>
        <ShowVideoGridCol vids={vids}/>
      </div>}
      {
        !CurrentUser && <div className="flex w-full justify-center">
          <div className="flex flex-col items-center">
            <h1>Please Login to see {page}</h1>
            <button
               onClick={handleSignInClick}
              className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign In
            </button>
            {
              showSignInForm && <SignInForm handleSignInClick={handleSignInClick}/>
            }
          </div>
        </div>
      }         
    </div>
    

  )
}

export default WHL