import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="">
        <div className='  bg-cover  bg-fixed  bg-no-repeat bg-[url(https://images.pexels.com/photos/147430/pexels-photo-147430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] h-screen pt-8  flex justify-between flex-col w-full '>
            
                <img className='w-16 ml-8' src="/Uber_logo.png" alt="" />
            
            <div className='bg-white py-4 px-4 pb-7 flex flex-col items-center'>
                <h2 className='text-3xl font-bold '>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center py-3 w-full bg-black text-white rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home