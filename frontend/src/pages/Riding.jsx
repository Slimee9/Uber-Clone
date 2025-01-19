import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Riding = (params) => {

  const location = useLocation()
  const {ride} = location.state || {}

  console.log(ride)
  

  return (
    <div className='h-screen'>
        <Link to={"/home"} className='fixed  right-2 top-1 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className='ri-home-5-line text-lg font-medium'></i>  
        </Link>
        <div  className='h-1/2'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="temp-img" />
        
        </div>
        <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
      <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="" />
        <div className='text-right'>
        <h2 className='text-lg  font-medium'>{ride?.captain.fullname.firstname}</h2>
        <h4 className='text-xl  font-semibold -mt-2 -mb-1'>{ride?.captain.vehicle.plate}</h4>
        <p className='text-sm  text-gray-400'>Maruti Suzuki S-Presso</p>
        
        </div> 
      </div>

      <div className='flex flex-col gap-2 justify-between items-center'>
        <div className='w-full mt-5'>
          
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className='ri-map-pin-2-fill text-lg'></i>
            <div>
              <h3 className='text-lg font-medium'> 562/11-a</h3>
              <p className='text-sm -mt-1 text-gray-600'>{ride?.destination}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3' >
            <i className='ri-currency-line text-lg'></i>
            <div>
              <h3 className='text-lg font-medium'>₹{ride?.fare}</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash-cash</p>
              
            </div>

          </div>
        </div>
      </div >
       
      <div className='w-full justify-center items-center flex'>
                <button className='bg-green-600 flex  justify-center items-center mt-3 text-white p-2 rounded-lg font-medium text-2xl w-[80%]'>Make a Payment</button>
      </div>      
        </div>
    </div>
  )
}

export default Riding