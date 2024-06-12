import React, { useState } from 'react'
import DisplayComments from './DisplayComments';

const Comments = () => {
    const [commentText, setCommentText]=useState('')

    const handleOnSubmit=()=>{

    }
     const commetsList = [
          {
            _id:"1",
            commentBody: "hello",
            userCommented: "abc",
          },
          {
            _id:"2",
            commentBody: "hiii",
            userCommented: "xyz",
          },
        ];


  return (
    <div className=''>Comments
        <div className='flex gap-3 items-center'>
            <div className="cursor-pointer relative w-7 h-7 mb-2 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-9 h-9 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
            <div className='w-full'>
                <form className="flex gap-2" onSubmit={handleOnSubmit}>
                    <input
                    type="text"
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="add comment..."
                    value={commentText}
                    className="w-full border border-gray-300 rounded-md py-1 px-4"
                    />
                    <input type="submit" value="Add" className="cursor-pointer w-16 hover:from-pink-500 hover:to-yellow-500 bg-gradient-to-r text-white  from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
                </form>
            </div>
        </div>
        <div className='mt-4'>
            {
                commetsList.map((m)=>{
                    return(
                        <DisplayComments commentBody={m.commentBody}
                        userCommented={m.userCommented}
                        cId={m._id}
                        key={m._id}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Comments