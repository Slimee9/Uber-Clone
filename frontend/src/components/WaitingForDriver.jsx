import React from 'react'

const WaitingForDriver = (params) => {
  return (
    <div>
      <h5 onClick={() => {
        params.waitingForDriver(false)
      }} className='p-1 text-center w-[93%] absolute top-0 '>
        <i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i></h5>
      <div className='flex items-center justify-between'>
      <img className='h-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="" />
        <div className='text-right'>
        <h2 className='text-lg font-medium'>Suresh</h2>
        <h4 className='text-xl font-semibold -mt-2 -mb-1'>MH15 GF 8175</h4>
        <p className='text-sm text-gray-400'>Maruti Suzuki S-Presso</p>
        
        </div> 
      </div>

      <div className='flex flex-col gap-2 justify-between items-center'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className='ri-map-pin-fill text-lg'></i>
            <div>
              <h3 className='text-lg font-medium'> 562/11-a</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab , Nashik</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className='ri-map-pin-2-fill text-lg'></i>
            <div>
              <h3 className='text-lg font-medium'> 562/11-a</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab , Nashik</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3' >
            <i className='ri-currency-line text-lg'></i>
            <div>
              <h3 className='text-lg font-medium'>₹193.20</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash-cash</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver