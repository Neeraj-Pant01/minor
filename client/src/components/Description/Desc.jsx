import React from 'react'
import "./desc.scss"
import { AiFillGift, AiFillShop, AiOutlineSync } from "react-icons/ai"
import { PiPiggyBankFill } from "react-icons/pi";

const Desc = () => {
  return (
    <div className='desc'>
      <h1>
        {/* Embrace the Timeless Appeal */}
        Together, Let's Preserve
      </h1>
      <p>
      "Embrace the Power of Reuse: Minimize Waste and Protect Our Planet!. By choosing to buy vintage, you're making an eco-friendly choice and adding a touch of history to your life."
      </p>
      <div className='advantages'>
        <div className='ad'>
            <AiFillShop className='ad-icon text-[orange]' />
            <b className='text-[orange]'>Eco-Freindly</b>
            <p className='ad-desc'>By reusing items, you're reducing waste and helping the environment.</p>
        </div>
        <div className='ad'>
            <AiOutlineSync className='ad-icon text-[goldenrod]' />
            <b className='text-[goldenrod]'>Reuse</b>
            <p className='ad-desc'>
            Embrace the power of reuse! By leveraging existing resources and solutions.
            </p>
        </div>
        <div className='ad'>
            <PiPiggyBankFill className='ad-icon text-[violet]'/>
            <b className='text-[violet]'>Affordable</b>
            <p className='ad-desc'>You can find high-quality, one-of-a-kind items at great prices when you shop vintage.</p>
        </div>
      </div>
    </div>
  )
}

export default Desc
