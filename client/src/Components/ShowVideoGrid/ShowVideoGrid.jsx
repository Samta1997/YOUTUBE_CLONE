import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'

const ShowVideoGrid = ({vids}) => {
    
  return (
    <div className='flex flex-wrap'>
        {
            vids?.map((vi)=>{
                return (<div key={vi._id}>
                    <ShowVideo vids={vi}/>
                </div>)
            })
        }
        
    </div>
  )
}

export default ShowVideoGrid