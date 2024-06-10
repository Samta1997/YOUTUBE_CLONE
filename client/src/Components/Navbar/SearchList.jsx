import React from 'react'
import {FaSearch} from 'react-icons/fa'

const SearchList = ({setSearchQuery,TitleArray}) => {
  return (
    <div className='flex-col w-48 sm:w-60 md:w-68 lg:w-72 absolute mt-6 sm:mt-1 bg-slate-100 rounded-md '>
      {
        
        TitleArray.map(m=>{
          return <p 
            key={m}
            onClick={e=>setSearchQuery(m)} 
            className='flex gap-3'>
            <FaSearch className='m-2'/>
          {m}
      </p>
        })
      }
    </div>
  )
}

export default SearchList