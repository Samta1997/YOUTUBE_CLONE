import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar"
import LeftSideBar1 from "../../Components/LeftSideBar/LeftSideBar1"
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import vid from '../Home/sample.mp4'
import { FaHistory } from "react-icons/fa";
import SignInForm from "../../Components/SignInForm/SignInForm";
import { useState } from "react";
const Library = ({leftSideBar}) => {
  const [showSignInForm, setShowSignInForm] = useState(false);
  const videoList = [
    {
      _id: 1,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 1",
      Uploder: "abc",
      description: "description of  video 1",
    },
    {
      _id: 2,
      video_src: vid,
      Chanel: "cdd",
      title: "video 2",
      Uploder: "abc",
      description: "description of  video 2",
    },
    {
      _id: 3,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
    },
    {
      _id: 4,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
    },
  ];

  const handleSignInClick = () => { //used when clicking on sign in is clicked
    setShowSignInForm(!showSignInForm);
  };

  // const CurrentUser=null;
  const CurrentUser = {
    result: {
      email: "abzxy50312@gmail.com",
      joinedOn: "2222-07-15T09:57:23.489Z",
    },
  };
  return (
    <div className="flex">
      {leftSideBar?<LeftSideBar/>:<LeftSideBar1/>}
      {CurrentUser && 
        <div className='flex-col ml-4'>
          <div>
            <div className="flex items-center m-4">
              <FaHistory/>
              <div className="font-bold text-xl">Your History</div>
            </div>
          <ShowVideoGrid vids={videoList}/>
          </div>
          <div>
            <div className="flex items-center m-4">
              <FaHistory/>
              <div className="font-bold text-xl">Liked Videos</div>
            </div>
          <ShowVideoGrid vids={videoList}/>
          </div>
          <div>
            <div className="flex items-center m-4">
              <FaHistory/>
              <div className="font-bold text-xl">Watch Later</div>
            </div>
          <ShowVideoGrid vids={videoList}/>
          </div>
        </div>
      }
      {
        !CurrentUser && <div className="flex w-full justify-center">
          <div className="flex flex-col items-center">
            <h1>Please Login to see Library</h1>
            
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

export default Library