import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  // const [userData, setUserData] = useState({})

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const handleSubmit = async (e) => {
      e.preventDefault()
      const captainData = {
        fullname: {
          firstname: firstname, 
          lastname: lastname},
        email : email,
        password  : password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate.trim(),
          capacity: vehicleCapacity,
          vehicleType: vehicleType

      // setUserData({
      //       fullName: {
      //         firstname: firstname, 
      //         lastname: lastname},
      //       email : email,
      //       password  : password
        
      //   })
        }
      
      }
      const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

      if (response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)

        navigate('/captain-home')
      }
      
      setFirstname('')
      setLastname('')
      setEmail('')
      setPassword('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
      // console.log(userData);
    }

  //  useEffect(() => {
  //       console.log('User-Data', userData)
  //     }, [userData]);
  
  return (
    <div className='py-7 px-5 flex flex-col justify-between h-screen items-center'>
        <div>
            <img className='w-20 mb-7' src="/uber-dri.svg" alt="" />

              <form action="" onSubmit={(e) => handleSubmit(e)}>
                  <h3 className='text-2xl font-semibold font-sans mb-7 '>Get Started with Uber</h3>
                  <h3 className='text-lg  mb-2 font-medium '>Enter Captain's name </h3> 
                    <div className='flex gap-5 mb-5'>
                        <input
                          required
                          className='bg-[#eeeeee] w-1/2  rounded px-3 py-2 border  text-base placeholder:text-base'
                          type="text"
                          placeholder='First name'
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                        />
                        <input
                          required
                          className='bg-[#eeeeee] w-1/2  rounded px-3 py-2 border  text-base placeholder:text-base'
                          type="text"
                          placeholder='Last name'
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                        />
                        
                    </div>

                  <h3 className='text-lg mb-2 font-medium '>Enter Captain's email </h3>
                      <input
                      required
                      className='bg-[#eeeeee] mb-5 rounded px-3 py-2 border w-full text-base placeholder:text-base'
                        type="email"
                        placeholder='email@example.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                  <h3 className='text-lg mb-2 font-medium '> Enter password</h3>

                      <input
                      required
                      className='bg-[#eeeeee] rounded mb-5 px-3 py-2 border w-full text-base placeholder:text-base'
                      type="password"
                      placeholder='password' 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}/>

                   <h3 className='text-lg mb-2 font-medium '>Vehicle Information</h3>
                      <div className='mb-5'>
                        <input
                          required
                          className='bg-[#eeeeee] mb-3 rounded px-3 py-2 border w-full text-base placeholder:text-base'
                          type="text"
                          placeholder='Vehicle Color'
                          value={vehicleColor}
                          onChange={(e) => setVehicleColor(e.target.value)}
                        />
                        <input
                          required
                          className='bg-[#eeeeee] mb-3 rounded px-3 py-2 border w-full text-base placeholder:text-base'
                          type="text"
                          placeholder='Vehicle Plate Number'
                          value={vehiclePlate} 
                          onChange={(e) => setVehiclePlate(e.target.value)}
                        />
                        <input
                          required
                          className='bg-[#eeeeee] mb-3 rounded px-3 py-2 border w-full text-base placeholder:text-base'
                          type="number"
                          placeholder='Vehicle Capacity'
                          value={vehicleCapacity}
                          onChange={(e) => setVehicleCapacity(e.target.value)}
                        />
                        <select
                          required
                          className='bg-[#eeeeee] mb-3 rounded px-3 py-2 border w-full text-base placeholder:text-base'
                          value={vehicleType}
                          onChange={(e) => setVehicleType(e.target.value)}
                        >
                          <option value="" disabled>Select Vehicle Type</option>
                          <option value="car">Car</option>
                          <option value="auto">Auto</option>
                          <option value="bike">Bike</option>
                        </select>
                      </div>
                      
                  <button  
                          className='bg-black text-white mb-3 rounded-md font-semibold  px-4 py-2  w-full text-base'>
                          Create Captain Account
                  </button>    
              </form>
                  <p className='text-center'>Already have a account ? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </div> 
        <div className=''> 
          <p className='text-[10px] leading-tight text-center mt-6'>
          This site is protected by reCAPTCHA and the <span className='underline'> Google Privacy Policy</span> and <span className='hover:underline hover:text-blue-600'>Terms of Service apply</span>.
          </p>
        </div>
    </div>
  )
}

export default CaptainSignup

 
