import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-400'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>About</p>
                </div>
                <div></div> 
                </div>             
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='smLtext-right text-4xl font-bold '>
                        <p>Here is where you can learn more about me.</p>
                    </div>
                    <div>
                        <p>My name is Shakil Miah, and I'm 23 years old. This year, I graduated from George Brown College with an advanced diploma in Computer Programming and Analysis. Throughout my studies, I focused on full stack development, 
                        and I'm eager to find a job in this field.
                        As a programmer, I'm passionate about creating dynamic and user-friendly web applications. I enjoy the challenge of bringing ideas to life through code and taking on new projects that stretch my skills.
                        Now that I've completed my studies, I'm actively seeking a position in the field of computer programming, with a specific interest in full stack development. I'm excited about the endless possibilities 
                        and challenges that come with this field and look forward to making a valuable contribution to the ever-evolving world of technology.</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About