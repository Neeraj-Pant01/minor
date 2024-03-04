import React from 'react'
import "./header.scss"

const Header = () => {
  return (
    <div className='header'>
        <h1>
      {/* Explore the Charm of Pre-Loved Treasures */}
      Small Changes, Big Impact: Embrace Reduce, Reuse, Recycle!
      </h1>
      <p>Search our collection of affordable and usable items</p>
      <div className='search-bar'>
        <input type='text' placeholder='search' />
        <button className='search-btn'>serach</button>
      </div>
    </div>
  )
}

export default Header
