import React, {useState} from 'react'
import { FaStar } from 'react-icons/fa'

const Star = ({noOfStars = 5}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleclick(getcurrentIndex) {
        setRating(getcurrentIndex)
    }
    function handleMouseEnter(getcurrentIndex) {
        setHover(getcurrentIndex)
    }
    function handleMouseLeave() {
        setHover(rating)
    }
  return (
    <div className='star-rating'>
      {
        [...Array(noOfStars)].map((_, index)=>{
            index += 1
                return <FaStar
                  className={index <= (rating || hover) ? 'active' : 'inactive'}
                    key={index}
                    onClick={()=>{handleclick(index)}}
                    onMouseMove={()=>{handleMouseEnter(index)}}
                    onMouseLeave={()=>{handleMouseLeave(index)}}
                    size={30}
                />
        })
      }
    </div>
  )
}

export default Star
