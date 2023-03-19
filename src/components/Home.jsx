import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#af3e51]'>My name is </p>
            <h1 className='text-6xl sm:text-7xl font-bold text-[#ccd6f6]'>Shakil,</h1>
            <h2 className='text-6xl sm:text-7xl font-bold text-[#8892b0]'>A new Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[800px]'>As a recent graduate seeking an entry-level full stack web development job, I believe that my motivation lies in creating user-friendly
            and engaging web experiences that are functional and aesthetically pleasing. My belief in myself 
            stems from my education and experience in the field, and my willingness to learn and adapt to new technologies and trends.
            </p>
            <p className='text-[#8892b0] py-4 max-w-[800px]'>
            I view my role as a full stack web developer as being a problem solver, collaborator, and innovator. Critical thinking is essential to my work as I strive to
            find the most efficient and effective solutions to complex technical challenges. At the same time, critical reflection allows me to learn from past experiences 
            and continuously improve my skills and approach.
            </p>
            <p className='text-[#8892b0] py-4 max-w-[800px]'>
            Looking forward, I am eager to continue growing and expanding my knowledge of web development. I am excited to work on projects that allow me to leverage my strengths while also challenging 
            me to learn and develop new skills. Ultimately, my ambition is to make a meaningful impact through my work, creating web experiences that not only meet the needs of users but also inspire and delight them.
            </p>
            <div>
                <button className='text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>My Projects
                <span className='group-hover:rotate-90 duration-200'>
                <HiArrowNarrowRight className='ml-2 '/>
                </span> 
                </button>
            </div>
        </div>

        

    </div>
  )
}

export default Home