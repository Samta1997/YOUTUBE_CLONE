import React from 'react'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import vidss from '../Home/sample.mp4'
import { useParams } from 'react-router-dom';
import LikeWatchLaterSaveBtn from './LikeWatchLaterSaveBtn';

const VideoPage = ({leftSideBar}) => {
  const vids = [
    {
      _id: 1,
      video_src: vidss,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 1",
      Uploder: "abc",
      description: "description of  video 1",
    },
    {
      _id: 2,
      video_src: vidss,
      Chanel: "cdd",
      title: "video 2",
      Uploder: "abc",
      description: "description of  video 2",
    },
    {
      _id: 3,
      video_src:vidss ,
      Chanel: "add",
      title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
    },
    {
      _id: 4,
      video_src: vidss,
      Chanel: "add",
      title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
    },
  ];
  const {vid}=useParams();
  const vv = vids.filter((q) => q._id ==vid)[0];
 
  return (
    <div className='flex  '>
      {leftSideBar?<LeftSideBar/>:""}
      <div className='sm:w-full md:w-3/5 md:mt-1 md:ml-20'  >
        <div className='flex-col '>
           <video src={vv.video_src} controls className='md:rounded-xl '/>
           <h2 className='font-bold text-xl'>{vv.title}</h2>
           <div className='flex flex-wrap text-sm justify-between'>
            <div className='flex mt-2'>
              <div className="cursor-pointer relative w-7 h-7 mb-2 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg className="absolute w-9 h-9 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              </div>
              <div className='ml-2 font-bold'>{vv.Uploder}</div>
              <div className='h-1 w-1 bg-gray-500 mt-2.5 ml-4 mr-1  rounded-full'></div>
              <div >3views</div>
              <div className='h-1 w-1 bg-gray-500 mt-2.5 ml-4 mr-1 rounded-full'></div>
              <div >8 months ago</div>
            </div>
            <LikeWatchLaterSaveBtn vv={vv}/>
          </div>
        </div>
      </div>
      <div className='hidden md:block ml-8'>More Videos</div>
    </div>
  )
}

export default VideoPage