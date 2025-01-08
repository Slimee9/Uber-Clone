import React from 'react'

const LookingForDriver = (params) => {
  return (
    <div>
        <h5 onClick={()=>{
        params.setVehicleFound(false)
      }} className='p-1 text-center w-[93%] absolute top-0 '>
        <i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>

      <div className='flex flex-col gap-2 justify-between items-center'>
      <img className='h-[40%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="" />
      <div className='w-full mt-5'>
        <div className='flex items-center gap-5 p-3 border-b-2'>
               <i className='ri-map-pin-fill text-lg'></i> 
               <div>
                 <h3 className='text-lg font-medium'> 562/11-a</h3>
                 <p className='text-sm -mt-1 text-gray-600'>{params.pickup}</p>
               </div>
        </div>
        <div className='flex items-center gap-5 p-3 border-b-2'>
        <i className='ri-map-pin-2-fill text-lg'></i> 
               <div>
                 <h3 className='text-lg font-medium'> 562/11-a</h3>
                 <p className='text-sm -mt-1 text-gray-600'>{params.destination}</p>
               </div>
        </div>
              <div className='flex items-center gap-5 p-3' >
                         <i className='ri-currency-line text-lg'></i> 
              <div>
                 <h3 className='text-lg font-medium'>₹{params.fare[params.vehicleType]}</h3>
                 <p className='text-sm -mt-1 text-gray-600'>Cash-cash</p>
         </div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default LookingForDriver