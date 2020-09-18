import React from 'react'
import './contactInfo.css'

function ContactInfo () {
  return (
    <div className='contactInfo uk-flex uk-flex-column uk-margin-bottom'>
      <span className='contactLabel uk-text-muted uk-form-label'>Email</span>
      <span className='contactDesc uk-flex uk-flex-middle'>
        <span className='contactIcon' uk-icon='icon: mail'></span>
        sarfojoee@gmail.com
      </span>
      <span className='contactLabel uk-text-muted uk-form-label'>Phone</span>
      <span className='contactDesc uk-flex uk-flex-middle'>
        <span className='contactIcon' uk-icon='icon: phone'></span>+358449897411
      </span>
      <span className='contactLabel uk-text-muted uk-form-label'>LinkedIn</span>
      <span className='contactDesc uk-flex uk-flex-middle'>
        <span className='contactIcon' uk-icon='icon: linkedin'></span>
        <a
          href='https://www.linkedin.com/in/joseph-sarfo-boadi-377735197/'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://www.linkedin.com/in/joseph-sarfo-boadi
        </a>
      </span>
      <span className='contactLabel uk-text-muted uk-form-label'>GitHub</span>
      <span className='contactDesc uk-flex uk-flex-middle'>
        <span className='contactIcon' uk-icon='icon: github'></span>
        <a
          href='https://github.com/sarfojoe'
          target='_blank'
          rel='noopener noreferrer'
        >
          github.com/sarfojoe
        </a>
      </span>
      <span className='contactDesc uk-flex uk-flex-middle'>
        <span className='contactIcon' uk-icon='icon: github'></span>
        <a
          href='https://gitconnected.com/v1/portfolio/sarfojoe'
          target='_blank'
          rel='noopener noreferrer'
        >
          gitconnected.com/v1/portfolio/sarfojoe
        </a>
      </span>
      <hr className='uk-divider-small' />
    </div>
  )
}

export default ContactInfo
