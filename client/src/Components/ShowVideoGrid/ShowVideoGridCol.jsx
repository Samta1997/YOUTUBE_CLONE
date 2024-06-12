import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'

const ShowVideoGridCol = ({vids}) => {
    
  return (
    <div className='flex-col'>
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

export default ShowVideoGridCol