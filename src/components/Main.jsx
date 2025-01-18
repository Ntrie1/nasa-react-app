import React from 'react'

export default function Main({data}) {
  return (
    <div className='imgContianer'>
        <img 
        src={data.hdurl }
        alt={data.title}
        className='bgImage'
        />
    </div>
  )
}
