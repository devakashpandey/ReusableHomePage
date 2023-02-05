import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='contact'>
           <h1>THIS IS CONTACT SECTION</h1> <br/>
      <form>
       <h2>Contact Here</h2><br/>
       <label>Email</label>
       <input type="text" placeholder='enter your mail'/>
       <label>Number</label>
       <input type="text" placeholder='enter your number'/>
       <label>Message</label>
       <textarea placeholder='enter your message'/>
      </form>
    </div>
    </>
  )
}

export default Contact;
