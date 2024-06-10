import {AiFillDislike,AiFillLike,AiOutlineDislike,AiOutlineLike,} from "react-icons/ai";
import { FaShare,FaDownload } from "react-icons/fa";
import { MdPlaylistAddCheck } from "react-icons/md";
import {RiPlayListAddFill} from "react-icons/ri"
import { useState } from "react";
const LikeWatchLaterSaveBtn = ({vv}) => {
    const [likeBtn, setLikeBtn]=useState(false)
    const [disLikeBtn, setDisLikeBtn]=useState(false)
    const [saveVideo, setSaveVideo]=useState(false)

    const handleLike=()=>{
        setLikeBtn(true)
        setDisLikeBtn(false)
    }

    const handleDislike=()=>{
        setDisLikeBtn(true)
         setLikeBtn(false)
        
    }

    const handleSave=()=>{
        setSaveVideo(!saveVideo)
    }


  return (
    <div className="flex justify-center gap-3">
        <div className="bg-gradient-to-r text-white from-indigo-500 via-purple-500 to-pink-500 flex  gap-2 justify-between px-2 items-center rounded-full">
            <div >
                {likeBtn?
                <>
                <div className="flex text-sm">
                <AiFillLike className="h-6 w-6" onClick={handleLike}/>1000
                </div>
                </>
                :<AiOutlineLike className="h-6 w-6" onClick={handleLike}/>}
            </div>
            <div >
                {disLikeBtn?<AiFillDislike className="h-6 w-6" onClick={handleDislike}/>:<AiOutlineDislike className="h-6 w-6" onClick={handleDislike}/>}
            </div>
        </div>
        <div className="bg-gradient-to-r text-white from-indigo-500 via-purple-500 to-pink-500 flex  px-2 items-center rounded-full">
            <FaShare/>
            <div className="ml-2">Share</div>
        </div>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex  text-white px-2 items-center rounded-full">
            <FaDownload/>
            <div className="ml-2">Download</div>
        </div>
        <div className="bg-gradient-to-r text-white from-indigo-500 via-purple-500 to-pink-500 flex  px-2 items-center rounded-full">
        {saveVideo ? (
            <>
              <MdPlaylistAddCheck onClick={handleSave}/>
              <div className="ml-2">Saved</div>
            </>
          ) : (
            <>
              <RiPlayListAddFill onClick={handleSave}/>
              <div className="ml-2">Save</div>
            </>
          )}
        </div>
    </div>
  )
}

export default LikeWatchLaterSaveBtn