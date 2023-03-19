import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/81b79f35-85a5-46c8-81d0-ce5e018169bd' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-400'>Contact</p>
            <p className='text-gray-400 py-4'>Please complete the form below or email me at shakil.miah@georgebrown.ca</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
        <textarea className='p-2 bg-[#ccd6f6]' name="message"  rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </form>


    </div>
  )
}

export default Contact