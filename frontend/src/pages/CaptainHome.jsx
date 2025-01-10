import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { CaptainDataContext } from "../context/CaptainContext";
import { SocketContext } from "../context/SocketContext";


const CaptainHome = () => {

  const [ridePopPanel, setRidePopPanel] = useState(true)
  const ridePopPanelRef = useRef(null)

  const [confirmedRidePopUp, setconfirmedRidePopUp] = useState(false)
  const confirmedRidePopUpRef = useRef(null)

  const { socket } = useContext(SocketContext)
  const { captain } = useContext(CaptainDataContext)


  useEffect(() => {

    console.log("Captain",captain)
    // console.log("Captain",captain.data._id)

    socket.emit('join', {
      userId: (captain.data._id),
      userType: 'captain'
    })

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

          console.log({userId: captain.data._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            }})

          socket.emit('update-location-captain', {
            userId: captain.data._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
        })
      }
    }

    const locationInterval = setInterval(updateLocation, 10000)
    updateLocation()
    // return () => clearInterval(locationInterval)
  })

socket.on('new-ride',(data) => {
  console.log(data)
  // setRidePopPanel(true)
})
  
  useGSAP(()=>{
    if(ridePopPanel){
      gsap.to(ridePopPanelRef.current,{
        transform: "translateY(0)"
      })
    }else{
      gsap.to(ridePopPanelRef.current,{
        transform: "translateY(100%)"
      })
    }
  },[ridePopPanel])

  useGSAP(()=>{
    if(confirmedRidePopUp){
      gsap.to(confirmedRidePopUpRef.current,{
        transform: "translateY(0)"
      })
    }else{
      gsap.to(confirmedRidePopUpRef.current,{
        transform: "translateY(100%)"
      })
    }
  },[confirmedRidePopUp])

  return (
      <div className="h-screen">
        <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
          <img className="w-16" src="Uber_logo.png" alt="" />

          <Link
            to={"/home"}
            className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
          >
            <i className="ri-logout-box-r-line text-lg font-medium"></i>
          </Link>
        </div>
        <div className="h-3/5">
          <img
            className="h-full w-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt="temp-img"
          />
        </div>
        <div className="h-2/5 p-4">
          <CaptainDetails/>
        </div>

        <div ref={ridePopPanelRef} className='fixed w-full z-10 bottom-0 translate-y-fill  px-3 py-10 pt-12 bg-white'>
          <RidePopUp setRidePopPanel={setRidePopPanel} setconfirmedRidePopUp={setconfirmedRidePopUp}/>
        </div>

        <div ref={confirmedRidePopUpRef} className='fixed w-full h-screen z-10 bottom-0  translate-y-full  px-3 py-10 pt-12 bg-white'>
          <ConfirmRidePopUp setconfirmedRidePopUp={setconfirmedRidePopUp} setRidePopPanel={setRidePopPanel}/>
        </div>
      </div>
  );
};

export default CaptainHome;
