import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const FinishRide = (params) => {

  const navigate = useNavigate()

  const endRide = async () => {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {

      rideId: params.ride._id


  }, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })

  if (response.status === 200) {
      navigate('/captain-home')
  }
      
  }

  console.log("FinishRide ", params.ride)

  return (
    <div className="">
      
      <h5
        onClick={() => {
          params.setfinishRidePanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        {" "}
        Finish this Ride{" "}
      </h3>
      <div className="flex items-center justify-between p-4 border-black border-2 bg-yellow-200 rounded-xl  mt-4">
        <div className="flex items-center  gap-3 ">
          <img
            className="h-16 w-16 rounded-full object-cover border-black"
            src="https://i1.sndcdn.com/avatars-000339084123-nag0p1-t1080x1080.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">{params.ride?.user.fullname.firstname}</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 kM</h5>
      </div>
      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium"> 562/11-a</h3>
              <p className="text-sm -mt-1 text-gray-600">
              {params.ride?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium"> 562/11-a</h3>
              <p className="text-sm -mt-1 text-gray-600">
              {params.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">₹{params.ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash-cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-ful  justify-center items-center ">
          
            <button 
            onClick={endRide}
             className="bg-green-600 w-full items-center flex justify-center mt-3 text-white p-3 rounded-lg font-semibold text-lg "> 
            Finish Ride </button>
          <p className=' mt-10 text-xs'>Click on Finish ride button if the payment is completed</p>
        </div>
      </div>
    </div>
  )
}

export default FinishRide