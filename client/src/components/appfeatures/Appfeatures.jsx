import React from 'react'
import { AiFillBook, AiFillHighlight, AiFillWechat, AiOutlineDeliveredProcedure, AiOutlineSearch } from 'react-icons/ai'
import { IoIosPeople } from "react-icons/io";
import { GiScrollQuill } from "react-icons/gi";

const features = [
    {
        icon: <AiFillBook />,
        title: "User Guide Documentation",
        desc: "detailed documentation for everybody to avoid delays in communication and help"
    },
    {
        icon: <IoIosPeople />,
        title: "Excellent Support Help",
        desc: "Excellent developer team to deal with your queries and solve bugs"
    },
    {
        icon: <AiOutlineSearch />,
        title: "Browser Compatibility",
        desc: "Cross browser optimization with chrome , firefox, microsoft edge etc"
    },
    {
        icon: <AiFillHighlight />,
        title: "High Performance",
        desc: "Experiance High Performance , as have used the various optimization techniques !"
    },
    {
        icon:<GiScrollQuill />,
        title:"Page Scroll Effect",
        desc:"smooth animation defected to show different sections"
    },
    {
        icon: <AiFillWechat />,
        title:"Live Chats",
        desc:"Easy communication with the help of the functionality of the live chats !"
    },
    {
        icon:<AiOutlineDeliveredProcedure />,
        title:"Deliveries Also Available",
        desc:"Home Deliveries are also available according to the area applicable charges will be applied !"
    }
]

const Appfeatures = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-28 bg-[rgba(0,0,0,0.8)] py-14'>
            <h1 className='text-[lightgrey] text-2xl font-semibold'>Top Of Application Features</h1>
            <p className='w-[50%] text-sm italic text-[grey] text-center mt-4'>We are sure you will be surprised with tons of ready features and elements included in the platform. Pixel perfect and fully responsive design as per latest web design trends easy navigation and many more.</p>
            <div className='flex mt-16 gap-7 justify-center flex-wrap'>
                {
                    features.map((f, i) => {
                        return (
                    <div className='flex mb-5 bg-[rgba(0,0,0,0.5)] py-5 px-3 rounded-lg w-[300px]'>
                                <div className="flex h-[50px] w-[100px] items-center justify-center text-[#febf10] border-[#febf10]">
                                    <span className='text-4xl'>
                                    {
                                        f?.icon
                                    }
                                    </span>
                                </div>
                                <div className='flex flex-col items-center gap-4'>
                                    <span className='text-[white]'>{f?.title}</span>
                                    <p className='w-[90%] text-center text-[14px] text-[grey]'>{f?.desc}</p>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default Appfeatures
