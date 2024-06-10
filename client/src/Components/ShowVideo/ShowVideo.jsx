import React from 'react'
import { NavLink } from 'react-router-dom'

const ShowVideo = ({vids}) => {
    
  return (
    <div className='flex-col sm:w-80 md:w-80 lg:w-80 lg:m-4 md:m-8 sm:m-1' >
        <NavLink to={`/videopage/${vids._id}`}>
            <video src={vids.video_src} className="rounded-lg"/>
        </NavLink>
        <NavLink to={`/videopage/${vids._id}`}>
            <div className='text-black'>{vids.title}</div>
        </NavLink>
        <div className='flex text-gray-400 hover:text-black'>
            <div className="cursor-pointer relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-8 h-8 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
            <div className='ml-2'>{vids.Uploder}</div>
        </div>
       
        <div className='flex text-gray-400 text-sm'>
            <div>6k views</div>
            <div className='h-1 w-1 bg-gray-500 mt-2.5 mx-2 rounded-full'></div>
            <div>10 months ago</div>
        </div>
        
    </div>
  )
}

export default ShowVideo