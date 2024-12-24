import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState({})

  const handleSubmit = (e) => {
      e.preventDefault()
      setUserData({
        fullName: {
          firstname: firstname, 
          lastname: lastname},
        email : email,
        password  : password
    
    })
      setFirstname('')
      setLastname('')
      setEmail('')
      setPassword('')
      console.log(userData);
    }

   useEffect(() => {
        console.log('User-Data', userData)
      }, [userData]);


  return (
    <div className='p-7 flex flex-col justify-between h-screen items-center'>
        <div>
            <img className='w-20 mb-7' src="/Uber_logo.png" alt="" />

              <form action="" onSubmit={(e) => handleSubmit(e)}>
                  <h3 className='text-2xl font-semibold font-sans mb-7 '>Get Started with Uber</h3>
                  <h3 className='text-lg  mb-2 font-medium '>Enter your name </h3> 
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

                  <h3 className='text-lg mb-2 font-medium '>Enter your email </h3>
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
                      
                  <button  
                          className='bg-black text-white mb-3 rounded-md font-semibold  px-4 py-2  w-full text-base'>
                          Login
                  </button>    
              </form>
                  <p className='text-center'>Already have a account ? <Link to='/login' className='text-blue-600'>Login here</Link></p>
        </div> 
        <div className=''> 
          <p className='text-[10px] leading-tight text-center mt-5'>
          This site is protected by reCAPTCHA and the <span className='underline'> Google Privacy Policy</span> and <span className='hover:underline hover:text-blue-600'>Terms of Service apply</span>.
          </p>
        </div>
    </div>
  )
}

export default UserSignup