import React from 'react'
import argentina from '../assets/argentina.png'

const Wrapper = () => {
  return (
    <section className='mt-[80px]  h-[70vh] flex justify-between items-center p-[2rem]'>
        <div>
          <p className='uppercase text-2xl'>sign up and get rewarded</p>
          <h1 className='uppercase text-white text-6xl font-bold my-[2rem]'>up to <span className='text-[#1BB96B]'>$20,000</span></h1>
          <button className='px-[3rem] py-[0.5rem] rounded-md bg-[magenta]'>Create Account</button>
        </div>
        <div>
            <img src={argentina} alt=""  className='h-full'/>
        </div>
    </section>
  )
}

export default Wrapper