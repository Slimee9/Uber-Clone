import React from 'react'


const VehiclePanel = (params) => {
  return (
    <div className='pt-10'>
        <h5 onClick={()=>{
        params.setVehiclePanel(false)
      }} className='p-1 text-center w-[93%] absolute top-0 '>
        <i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehcile</h3>


        <div onClick={()=>{
           params.setConfirmedRidePanel(true) 
           params.selectVehicle('car')
        }} className='mb-2 flex border-2 active:border-black   rounded-xl w-full items-center p-3 justify-between  '>
              <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="car-png" />
              <div className=' -ml-2 w-1/2'>
                <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
                <h5 className='font-medium text-xs'> 2 min away </h5>
                <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
              </div>
              <h2 className='text-lg font-semibold'>₹{params.fare.car}</h2>
        </div>

        <div onClick={()=>{
           params.setConfirmedRidePanel(true) 
           params.selectVehicle('bike')

        }} className='mb-2 flex border-2 active:border-black   rounded-xl w-full items-center p-3 justify-between  '>
              <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="car-png" />
              <div className=' -ml-2 w-1/2'>
                <h4 className='font-medium text-base'>Moto <span><i className='ri-user-3-fill'></i>1</span></h4>
                <h5 className='font-medium text-xs'> 3 min away </h5>
                <p className='font-normal text-xs text-gray-600'>Affordable, Motor-cycle ride</p>
              </div>
              <h2 className='text-lg font-semibold'>₹{params.fare.bike}</h2>
        </div>

        <div onClick={()=>{
           params.setConfirmedRidePanel(true) 
           params.selectVehicle('auto')

        }} className='mb-2 flex border-2 active:border-black   rounded-xl w-full items-center p-3 justify-between  '>
              <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="car-png" />
              <div className=' -ml-2 w-1/2'>
                <h4 className='font-medium text-base'>UberAuto <span><i className='ri-user-3-fill'></i>3</span></h4>
                <h5 className='font-medium text-xs'> 3 min away </h5>
              </div>
              <h2 className='text-lg font-semibold'>₹{params.fare.auto}</h2>
        </div>
        

        <div onClick={()=>{
           params.setConfirmedRidePanel(true) 
           params.selectVehicle('premium')
           }} className='mb-2 flex border-2 active:border-black   rounded-xl w-full items-center p-3 justify-between  '>
              <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="car-png" />
              <div className=' -ml-2 w-1/2'>
                <h4 className='font-medium text-base'>Premium <span><i className='ri-user-3-fill'></i>5</span></h4>
                <h5 className='font-medium text-xs'> 8 min away </h5>
                  <p className='font-normal text-xs text-gray-600'>
                    Experience the comfort and luxury of our XUVs, and also
                    committed to your safety and satisfaction. 
                  </p>
              </div>
              <h2 className='text-lg font-semibold'>₹{params.fare.premium}</h2>
        </div>
    </div>
  )
}

export default VehiclePanel