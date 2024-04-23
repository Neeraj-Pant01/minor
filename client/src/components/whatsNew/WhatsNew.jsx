import React from 'react'

const newFeatures = [
    {
        title:"Home Delivery",
        img:"https://upload.wikimedia.org/wikipedia/commons/b/bb/Home-delivery.jpg"
    },
    {
        title:"Cash On Delivery",
        img:"https://m.economictimes.com/thumb/msid-83058184,width-1200,height-900,resizemode-4,imgsize-47252/cod-istock.jpg"
    },
    {
        title:"Hourley Deals",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_MQ-Bhmu4HVxpki_NYS21p2_y9znt-6eRUJTQJEEg-7FtusosmyiF9qNuHIf1EzjpMQ&usqp=CAU"
    },
    {
        title:"Live Conversations",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-bIy786tIFIdwJF1lauLV7ozI0wQaNY7JSHtfYoMOA&s"
    }
]

const WhatsNew = () => {
  return (
    <>
    <h1 style={{lineHeight:"6rem"}} className='text-center mt-16 mb-8 text-3xl font-semibold text-[grey]'>WHAT'S NEW HERE !</h1>
    <div className='flex items-center justify-center gap-6 flex-wrap px-20'>
      {
        newFeatures.map((f,i)=>{
            return (
                <div className='flex rounded-lg relative'>
                    <div style={{fontFamily:"cursive"}} className='absolute w-full h-full bg-[rgba(0,0,0,0.7)] font-semibold italic flex items-center justify-center rounded-lg text-3xl text-[white] cursor-pointer'>{f?.title}</div>
                    <img src={f?.img} key={i} className='w-[500px] h-[400px]'/>
                    
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default WhatsNew
