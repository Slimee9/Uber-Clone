import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanelRef = useRef(null)
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false)
  const confirmedRidePanelRef = useRef(null)
  const [vehicleFound, setVehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null)

  const waitingForDriverRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

   const handleSubmit =(e) => {
        e.preventDefault()
  }

  useGSAP(()=>{
  if(panelOpen){
    gsap.to(panelRef.current,{
      height:'70%',
      padding:20
      // opacity:1
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
    })
  }else{
    gsap.to(panelRef.current,{
      height: '0%',
      padding: 0
      
      // opacity:0
    })
    gsap.to(panelCloseRef.current,{
      opacity:0
    })
  }
  },[panelOpen])

  useGSAP(()=>{
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
      transform:'translateY(100%)'
    })
  }
  },[vehiclePanel])

  useGSAP(()=>{
    if(confirmedRidePanel){
      gsap.to(confirmedRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmedRidePanelRef.current,{
      transform:'translateY(100%)'
    })
  }
  },[confirmedRidePanel])

  useGSAP(()=>{
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
      transform:'translateY(100%)'
    })
  }
  },[vehicleFound])

  useGSAP(()=>{
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(waitingForDriverRef.current,{
      transform:'translateY(100%)'
    })
  }
  },[waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 ml-8 absolute left-5 top-5' src="Uber_logo.png" alt="" />
      
      <div  className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="temp-img" />
      </div>

      <div className=' flex flex-col justify-end  h-screen absolute top-0 w-full '>
        <div className='h-[30%] p-6 bg-white relative '>
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
          }} className='absolute opacity-0 right-6 top-6 text-2xl'>
          <i className="ri-arrow-down-wide-line"></i>
          </h5>
            <h4 className='text-2xl font-semibold'>Find Trip</h4>
            <form onSubmit={(e) => {handleSubmit(e)}} action="" className=''>
              <div className="line absolute h-12 w-1 top-[45%] ml-5 bg-gray-800 rounded-full"></div>
              
              <input
              onClick={()=>{
                setPanelOpen(true)
              }} 
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
              type="text" 
              placeholder='Add a pick-up location' />

              <input value={destination}
              onClick={()=>{
                setPanelOpen(true)
              }}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' 
              type="text" 
              placeholder='Enter your Destination' />

            </form>
        </div>
        <div ref={panelRef} className='bg-white h-[0]'>
              <LocationSearchPanel  setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white'>
      <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

      <div ref={confirmedRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
              <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound} setVehiclePanel={setVehiclePanel}/>
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
              <LookingForDriver setVehicleFound={setVehicleFound}  />
      </div>

      <div ref={waitingForDriverRef}  className='fixed w-full z-10 bottom-0  px-3 py-6 pt-12 bg-white'>
              <WaitingForDriver  waitingForDriver={waitingForDriver} />
      </div>
    </div>
  )
}

export default Home
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTnh-e_leKUX2rXqPBTBtht_Nmm1P_1MjfA&s