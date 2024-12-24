import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const UserLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    setUserData({ 
      email : email,
      password  : password
    })
    setEmail(''),
    setPassword('')
  }

  useEffect(() => {
    console.log('User Data', userData)
  }, [userData]);

  return (
    <div className='p-7 flex flex-col justify-between h-screen items-center'>
        <div>
            <img className='w-16 mb-12' src="/Uber_logo.png" alt="" />

              <form action="" onSubmit={(e) => handleSubmit(e)}>
                  <h3 className='text-lg mb-2 font-medium '> What's your email</h3>
                      <input
                      required
                      value={email} 
                      onChange={(e) => setEmail(e.target.value) 
                      }
                      className='bg-[#eeeeee] mb-7 rounded px-3 py-2 border w-full text-lg placeholder:text-base'
                        type="email"
                        placeholder='email@example.com'
                      />

                  <h3 className='text-lg mb-2 font-medium '> Enter password</h3>

                      <input
                      required
                      value={password} 
                      onChange={(e) => setPassword(e.target.value) 
                      }
                      className='bg-[#eeeeee] rounded mb-7 px-3 py-2 border w-full text-lg placeholder:text-base'
                      type="password"
                      placeholder='password' />
                      
                  <button  
                          className='bg-black text-white mb-3 rounded-md font-semibold  px-4 py-2  w-full text-lg'>
                          Login
                  </button>

                  
              </form>
                  <p className='text-center'>New here ? <Link to='/signup' className='text-blue-600'> Create new Account</Link></p>
        </div> 
        <div className=''> 
          <Link to='/captain-login'
          className='bg-[#10b461] flex justify-center items-center text-white rounded-md font-semibold mb-7 px-16 py-2  w-full text-lg'>Sign in as Captain
          </Link>
        </div>
    </div>
  )
}

export default UserLogin
// p-7 items-center justify-center flex flex-col h-screen