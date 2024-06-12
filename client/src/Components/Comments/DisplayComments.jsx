import React from 'react'

const DisplayComments = ({cId,commentBody,userCommented}) => {
  return (
    <div className='flex gap-3 items-center mb-4'>
        <div className="cursor-pointer relative w-7 h-7 mb-2 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg className="absolute w-9 h-9 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
        </div>
        <div className='w-full'>
            <div className='font-bold text-sm'>@{userCommented}</div>
            <div className='text-sm'>{commentBody}</div>
        </div>
</div>
  )
}

export default DisplayComments