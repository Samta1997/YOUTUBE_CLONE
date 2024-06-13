import ShowVideoGridCol from '../../Components/ShowVideoGrid/ShowVideoGridCol';
import vid from '../Home/sample.mp4'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar';
import LeftSideBar1 from '../../Components/LeftSideBar/LeftSideBar1';
import { FaHistory } from "react-icons/fa";
import { VscClearAll } from "react-icons/vsc";

const History = ({leftSideBar}) => {

  const historyList = [
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

  return (
    <div className='flex'>
       {leftSideBar?<LeftSideBar/>:<LeftSideBar1/>}
       <div className='flex w-full justify-between flex-wrap'>
          <div className='flex justify-center'>
            <div className='p-32'>
              <div className='flex'>
                <FaHistory className='text-4xl mt-3'/>
                <h1 className='font-bold text-5xl ml-2'>Watch History</h1>
              </div>
              <div className='flex items-center ml-4 mt-16  hover:text-red-600 lg:text-3xl md:text-2xl sm:text-xl  '>
                <VscClearAll className='' />
                <h2 className='font-bold  ml-2  cursor-pointer'>Clear History</h2>
               
              </div>
            </div>   
               
          </div>
          <ShowVideoGridCol vids={historyList}/>
        </div>
       
        
      
    </div>
  )
}

export default History