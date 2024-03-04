import React, { useState } from 'react'
import "./testimonials.scss"
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import UserRev from '../userRev/UserRev'

const reviews = [
    {
        username:"sheetal sharma",
        review:"I purchased an almirah. It was good Quality and was very helpful purchase.",
        stars:5,
        image:"/sheetal.jpeg"
    },
    {
        username:"Aayush Sharma",
        review:"I purchased a folding bed.It was good quality.Nice Experience.",
        stars:3,
        image:"/ayush.jpeg"
    },
    {
        username:"Neeraj Pant",
        review:"I purchased a rod for water heating.It was a helpful purchase.",
        stars:4,
        image:"/neeraj.jpeg"
    },
    {
        username:"Abhishek Pandey",
        review:"The UI of the website was easy to use and the purchase was really good.Excellent purchase.",
        stars:4,
        image:"/ap.jpeg"
    },
    {
        username:"Sameer Singh Mahar",
        review:"rev1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ab dolor quo repellendus recusandae dolore soluta quasi possimus numquam doloribus?",
        stars:4,
        image:"/"
    }
]

const Testimonials = () => {
    const [index, setIndex] = useState(0)

    const handleRight = () =>{
        if(index === reviews.length - 1){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }

    const handleLeft = () =>{
        if(index === 0){
            setIndex(reviews.length - 1)
        }else{
            setIndex(index - 1)
        }
    }

  return (
    <div className='testimonials'>
      <h1>Meet our Responsible Consumers</h1>
      <p>Trusted by the best teams in the world. We help teams of all sizes.</p>
      <div className='reviews'>
        {
            <UserRev index={index} reviews={reviews} />
        }
      </div>
      <div className="navigations">
        <AiOutlineLeftCircle className='nav-icon' onClick={handleLeft}/>
        <AiOutlineRightCircle className='nav-icon'onClick={handleRight}/>
      </div>
    </div>
  )
}

export default Testimonials
