import React , {useContext, useEffect, useState  } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({children}) => {

    const token  = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [ isloading, setIsLoading ] = useState(true)


    // console.log(token)

    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
            
        }).then((response) => {
            if(response.status === 200){
                setCaptain(response)
                setIsLoading(false)
            }
        }).catch((error) => {
            console.log(error)
            localStorage.removeItem('token')
            navigate('/captain-login')
        })
    }, [token])
    


    if(isloading){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }


  return (
    <>
        {children}
    </>
  )
}


export default CaptainProtectWrapper