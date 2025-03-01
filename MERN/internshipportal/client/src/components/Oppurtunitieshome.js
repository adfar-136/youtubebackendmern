import React, { useEffect, useState } from 'react'
import OppurtunitiesData from "../oppurtunities.json";
import OppurtunityCard from './OppurtunityCard';
import axios from 'axios';
export default function Oppurtunitieshome() {
  const [appliedOppurtunities,setAppliedOppurtunities] = useState([])
  useEffect(()=>{
    fetchAppliedOppurtunities()
  },[])
  const fetchAppliedOppurtunities=async()=>{
    try {
      const response = await axios.get("http://localhost:4000/auth/applied",{
        withCredentials:true
      })
     setAppliedOppurtunities(response.data)
    } catch (error) {
      
    }
  }
  return (
    <div>
       <h1>Internship Oppurtunities</h1>
       <div>
        {Object.values(OppurtunitiesData.internships_meta).map(oppurtunity =>(
            <OppurtunityCard key={oppurtunity.id} oppurtunity = {oppurtunity} appliedOppurtunities={appliedOppurtunities}/>
        ))}
       </div>
    </div>
  )
}
