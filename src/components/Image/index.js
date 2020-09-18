import React from 'react'
import './image.css'
import myImg from '../../assets/images/mypix.jpg'

function Image () {
  return (
    <div>
      <div className='uk-tile aboutSection' uk-height-viewport='expand: true'>
        <img
          src={myImg}
          alt='Me'
          className='uk-border-circle myImg'
          uk-img='true'
        />
      </div>
    </div>
  )
}

export default Image
