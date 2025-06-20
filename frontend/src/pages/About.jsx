import React from 'react'
import TitleImage from '../components/TitleImage'

const About = () => {
  return (
    <>
      <TitleImage title={'ABOUT'}/>
      <div className='max-w-[1450px] mx-auto flex justify-between gap-3'>
        <div className='w-1/2'>
          <h1 className='text-xl font-semibold'>font</h1>
          <input type="text" className='w-full' placeholder='enter' />
        </div>
        <div className='w-1/2'>
          <h1 className='text-xl font-semibold'>font</h1>
          <input type="text" className='w-full' placeholder='enter' />
        </div>
      </div>
    </>
  )
}

export default About