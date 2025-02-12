import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { Link, useLocation } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import LiveTracking from '../components/LiveTracking'


const CaptainRiding = () => {

    const [finishRidePanel, setfinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)
    const location = useLocation()
    const rideData = location.state?.ride

    console.log("CaptainRiding ridedata",rideData)

    

    useGSAP(()=>{
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current,{
            transform: "translateY(0)"
          })
        }else{
          gsap.to(finishRidePanelRef.current,{
            transform: "translateY(100%)"
          })
        }
      },[finishRidePanel])
    
  return (
<div className="h-screen">
        <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
          <img className="w-16" src="Uber_logo.png" alt="" />

          <Link
            to={"captain-home"} 
            className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
          >
            <i className="ri-logout-box-r-line text-lg font-medium"></i>
          </Link>
        </div>
        <div className="h-4/5">
          <LiveTracking/>
          {/* <img
            className="h-full w-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt="temp-img"
          /> */}
        </div>

        <div className="h-1/5 p-4 flex relative items-center justify-between bg-yellow-400"
        onClick={()=>{
          setfinishRidePanel(true)
      }} >
        <h5 onClick={() => {
        }} className="p-1 text-center w-[93%] absolute top-0 "
      > <i className="ri-arrow-up-wide-line text-3xl text-gray-800"></i>
      </h5>
                <h4 className='text-xl font-semibold '> 4 Km away</h4>
                <button className="bg-green-600  text-white p-3 px-10 rounded-lg font-semibold text-2xl ">Complete Ride</button>
        </div>

        <div  ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  px-3 py-10 pt-12 bg-white'>
            <FinishRide 
            ride={rideData} 
            setfinishRidePanel={setfinishRidePanel} 
            />
        </div>
        
      </div>  )
}

export default CaptainRiding