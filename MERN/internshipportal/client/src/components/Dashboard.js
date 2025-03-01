import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
 const [appliedOppurtunities,setAppliedOppurtunities] = useState([])
 const navigate = useNavigate()
  useEffect(()=>{
    const verifyUser = async()=>{
      try {
        const response = await axios.get("http://localhost:4000/auth/verify",{
          withCredentials:true
        })
        if(!response.data.status){
          navigate("/login")
        } else {
          fetchAppliedOppurtunities()
        }
      } catch (error) {
        navigate("/login")
      }
    }
    verifyUser()
  },[navigate])
  const fetchAppliedOppurtunities =async()=>{
    try {
      const response = await axios.get("http://localhost:4000/auth/applied",{
        withCredentials:true
      })
      setAppliedOppurtunities(response.data)
    } catch (error) {
      
    }
  }
 async function handleLogout (){
    const response = await axios.get("http://localhost:4000/auth/logout",{
      withCredentials:true
    })
    if(response.data.status){
      navigate("/login")
    }
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Applied oppurtunities</h2>
      <button onClick={handleLogout}>Logout</button>
      {appliedOppurtunities.map((item)=>(
        <div>
        <h1>{item.profile_name}</h1>
        <p><strong>ID : </strong>{item.id}</p>
        <p><strong>Company name : </strong>{item.company_name}</p>
        <p><strong>Duration : </strong>{item.duration}</p>

        </div>
      ))}
    </div>
  )
}
