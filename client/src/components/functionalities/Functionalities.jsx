import React from 'react'
import { AiFillBackward, AiFillSecurityScan, AiOutlineGlobal, AiOutlineSearch } from 'react-icons/ai'
import "./style.scss"
import { FaMedal } from "react-icons/fa";
import { GiAmericanShield } from "react-icons/gi";
import { useInView } from 'react-intersection-observer';

const functionLeft = [
    {
        title:"Good Quality Products",
        desc:"Explore our collection of premium goods, meticulously vetted for exceptional quality.",
        icon:<FaMedal />
    },
    {
        title:"100% Responsive & Optimized",
        desc:"The theme is fully responsive and ready for retina displays. To look your website beautiful on tablets and mobile devices",
        icon:<GiAmericanShield />
    },
    {
        title:"Authentication & Authorization",
        desc:"The platform is fully secure including the functionality of both authentication and authorization",
        icon:<AiFillSecurityScan />
    }
]

const functionRight = [
    {
        title:"Search Engine Optimization",
        desc:"Combination of SEO and our web development team make a powerful weapon to get super high conversion rate websites.",
        icon:<AiOutlineSearch />
    },
    {
        title:"100% Responsive & Optimized",
        desc:"The theme is fully responsive and ready for retina displays. To look your website beautiful on tablets and mobile devices",
        icon:<GiAmericanShield />
    },
    {
        title:"Browser Compatibility",
        desc:"One of our goal is to bring you compatible themes with most of the commonly used browsers which become a business core advantage.",
        icon:<AiOutlineGlobal />
    }
]


const RightComponent = ({dir, index, item}) =>{

    const {ref, inView} = useInView({
        threshold : 0.5
    })

    const animateClass = inView ? 'anim' : ''

    return (
        <div ref={ref} style={{marginTop: `${index===0 ? "150px" : "0px"}`,flexDirection: `${dir==="left" ? "row-reverse": ""}`}} className={`md:${animateClass} flex gap-6 items-center justify-end`}>
                    <div className='flex flex-col justify-end w-[40%] gap-3'>
                        <h1 className='font-semibold text-start text-lg text-[rgba(0,0,0,0.7)]'>{item.title}</h1>
                    <p className='text-[grey] font-thin text-sm italic text-start leading-6'>{item.desc}
                    </p>
                    </div>
                    <div className='w-[100px] shadow-md flex h-[100px] rounded-full bg-[white] items-center justify-center cursor-pointer text-[#FEBE10] hover:text-[white] hover:bg-[#FEBE10] transition-all'>
                        <span className='text-4xl'>{item.icon}</span>
                    </div>
                </div>
    )
}

const Functionalities = () => {
    const {ref, inView} = useInView({
        threshold : 0.5
    })

    const animateClass = inView ? 'anim-left' : ''

  return (
    <div ref={ref} className={`flex flex-col bg-[#f5f2f2] py-7 min-h-screen`}>
      <h1 style={{fontFamily:"sans-serif"}} className='text-2xl font-bold text-center h-max w-full mt-10'>A Fresh Decade of Wow</h1>
      <h1 style={{fontFamily:"sans-serif"}} className='text-2xl font-bold text-center h-max mt-2 w-full text-[rgba(0,0,0,0.6)]'>Core Value Of Our Product</h1>
      <div className='flex flex-col md:flex-row mt-16 py-4'>
        <div className='flex h-[600px] flex-col gap-28 flex-1 border-r justify-end px-6 pr-12'>
           {
            functionLeft.map((f,i)=>{
                return (
                    <div className={`md:${animateClass} flex gap-6 items-center justify-end`}>
                    <div className='flex flex-col justify-end md:w-[40%] w-[60%] gap-3'>
                        <h1 className='font-semibold text-end text-lg text-[rgba(0,0,0,0.8)]'>{f.title}</h1>
                    <p className='text-[grey] font-thin text-sm italic text-end leading-6'>{f.desc}
                    </p>
                    </div>
                    <div className='w-[100px] shadow-md flex h-[100px] rounded-full bg-[white] items-center justify-center cursor-pointer text-[#FEBE10] hover:text-[white] hover:bg-[#FEBE10] transition-all'>
                        {
                            <span className='text-4xl'>{f.icon}</span>
                        }
                    </div>
                </div>
            )
            })
           }
        </div>
        <div className='flex flex-1 border-l flex-col px-4 items-start gap-28 justify-start pl-12'>
            {
                functionRight.map((item,index)=><RightComponent dir="left" item={item} index={index}/>)
            }
        </div>
      </div>
    </div>
  )
}

export default Functionalities
