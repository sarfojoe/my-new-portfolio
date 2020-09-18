// import React, { useRef, useState } from 'react'
// import './contactForm.css'
// import emailjs from 'emailjs-com'
// import dotenv from 'dotenv'
// dotenv.config()

// function ContactForm () {
//   const nameRef = useRef()
//   const emailRef = useRef()
//   const messageRef = useRef()

//   const [messageSent, setMessageSent] = useState(false)
//   const [misingFields, setMissingFields] = useState(false)

//   function handleSubmit (e) {
//     e.preventDefault()
//     let name = nameRef.current.value
//     let email = emailRef.current.value
//     let message = messageRef.current.value

//     const messageInfo = {
//       name: name,
//       email: email,
//       message: message
//     }

//     if (name && email && message) {
//       setMissingFields(false)
//       console.log('Form submitting...')
//       emailjs
//         .send(
//           'default_service',
//           'portfolio_contact',
//           messageInfo,
//           process.env.REACT_APP_EMAILJS_USERID
//         )
//         .then(res => {
//           console.log('Form submitted...', res)
//         })
//         .catch(err => {
//           console.log(
//             'Something went wrong while trying to send the form...',
//             err
//           )
//         })

//       setMessageSent(true)
//       // setTimeout(() => {
//       //     window.location.reload(false);
//       // }, 3000);
//     } else {
//       console.log('Empty fields...')
//       setMissingFields(true)
//     }
//   }

//   return (
//     <form
//       className='uk-form-stacked uk-position-relative'
//       uk-height-viewport='expand: true'
//       onSubmit={handleSubmit}
//     >
//       <div className='uk-margin'>
//         <label className='uk-form-label uk-text-muted' htmlFor='name'>
//           Name
//         </label>
//         <div className='uk-form-controls'>
//           <input
//             className='uk-input'
//             id='name'
//             type='text'
//             placeholder='John Doe'
//             ref={nameRef}
//           />
//         </div>
//       </div>
//       <div className='uk-margin'>
//         <label className='uk-form-label uk-text-muted' htmlFor='email'>
//           Email
//         </label>
//         <div className='uk-form-controls'>
//           <input
//             className='uk-input'
//             id='email'
//             type='text'
//             placeholder='johndoe@email.com'
//             ref={emailRef}
//           />
//         </div>
//       </div>
//       <div className='uk-margin'>
//         <label className='uk-form-label uk-text-muted' htmlFor='message'>
//           Message
//         </label>
//         <div className='uk-form-controls'>
//           <textarea
//             className='uk-textarea'
//             id='message'
//             rows='5'
//             placeholder='Your message...'
//             ref={messageRef}
//           ></textarea>
//         </div>
//         {messageSent ? (
//           <div
//             className='success-alert-container uk-alert-success'
//             uk-alert='true'
//           >
//             <span className='uk-alert-close' uk-close='true'></span>
//             <p>Your message was sent successfully!</p>
//           </div>
//         ) : (
//           ''
//         )}
//         {misingFields ? (
//           <div
//             className='danger-alert-container uk-alert-danger'
//             uk-alert='true'
//           >
//             <span className='uk-alert-close' uk-close='true'></span>
//             <p>Please fill in all the fields and try again.</p>
//           </div>
//         ) : (
//           ''
//         )}
//       </div>
//       <button id='submitBtn' className='uk-button' type='submit'>
//         Submit
//       </button>
//     </form>
//   )
// }

// export default ContactForm

import React from 'react'
import './contactForm.css'

class Contact extends React.Component {
  render () {
    return (
      <div>
        <form
          action='https://formspree.io/xrgozoyy'
          method='POST'
          className='contactForm'
        >
          <div id='errormessage'></div>
          <div className='row'>
            <div className='uk-form-controls'>
              <div className='form-group'>
                <input
                  type='text'
                  name='name'
                  className='uk-input'
                  id='name'
                  placeholder='Your Name'
                  data-rule='minlen:4'
                  data-msg='Please enter at least 4 chars'
                />
              </div>
            </div>
            <div className='uk-margin'>
              <div className=''>
                <input
                  type='email'
                  className='uk-input'
                  name='email'
                  id='email'
                  placeholder='Your Email'
                  data-rule='email'
                  data-msg='Please enter a valid email'
                />
              </div>
            </div>
            <div className='uk-margin'>
              <input
                type='text'
                className='uk-input'
                name='subject'
                id='subject'
                placeholder='Subject'
                data-rule='minlen:4'
                data-msg='Please enter at least 8 chars of subject'
              />
            </div>
            <div className='uk-margin'>
              <div className='form-group'>
                <textarea
                  className='uk-textarea'
                  name='message'
                  rows='5'
                  data-rule='required'
                  data-msg='Please write something for us'
                  placeholder='Message'
                ></textarea>
              </div>
            </div>

            <button id='submitBtn' className='uk-button' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact
