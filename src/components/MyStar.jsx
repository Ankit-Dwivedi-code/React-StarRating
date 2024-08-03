import { useState } from "react"
import React from 'react'
import { FaStar } from 'react-icons/fa'

const MyStar = ({starlen = 5}) => { 
    const [stars, setStars] = useState(0)

    const handleClick=(id)=>{
        setStars(id)
    }
  return (
    <div className='container'>
      {
        [...Array(starlen)].map((_, i)=>{
             i += 1
           return <FaStar
            key={i}
            size={40}
            className={i <= stars ? "active" : "inactive"}
            onClick={()=>{handleClick(i)}}
           
            />
        })
      }
    </div>
  )
}

export default MyStar
