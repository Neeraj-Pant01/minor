import React, { useEffect, useState } from 'react'
import "./userrev.scss"
import { AiFillStar } from 'react-icons/ai'

const UserRev = ({index,reviews}) => {

    const [animation, setAnimation] = useState(false)

    useEffect(()=>{
        setAnimation(true)

        const timeOut = setTimeout(() => {
            setAnimation(false)
        }, 500);

        return () =>{
            clearTimeout(timeOut)
        }
    },[index])

  return (
    <div className={`${animation && 'aimateRev'} rev-wrapper`}>
        <div className="rev-desc">
            <p className='rev-U'>
            {
                reviews[index || 0]?.review
            }
            </p>
            <div className='rating-stars'>
                {
                    Array.from({length:reviews[index]?.stars}).map((_,i)=><AiFillStar key={i} style={{color:"goldenrod"}}/>)
                }
            </div>
        </div>
        <div className="user-detail">
            <img src={reviews[index || 0]?.image} alt='' />
            <b>{reviews[index || 0]?.username}</b>
        </div>
    </div>
  )
}

export default UserRev
