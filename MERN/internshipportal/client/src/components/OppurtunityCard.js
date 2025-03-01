import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
export default function OppurtunityCard({oppurtunity,appliedOppurtunities}) {
  const isApplied = appliedOppurtunities.some((item)=>item.id === oppurtunity.id)
 axios.defaults.withCredentials = true;
  const navigate = useNavigate()
    function applyOnOpputunity(oppurtunity){
      try {
        axios.post("http://localhost:4000/auth/apply",{oppurtunity}).then((response)=>{
          if(response.data.status){
            navigate("/dashboard")
          }
        })
       
      } catch (error) {
        
      }
    }
  return (
    <div>
        <h1>{oppurtunity.profile_name}</h1>
        <p><strong>Company name : </strong>{oppurtunity.company_name}</p>
        <p><strong>Stipend : </strong>{oppurtunity.stipend.salary}</p>
        <p><strong>Location : </strong>{oppurtunity.locations.length > 0 ? oppurtunity.locations.map(item => item.string).join(", "):"Remote"}</p>
        <p><strong>Duration : </strong>{oppurtunity.duration}</p>
        <p><strong>Start Date : </strong>{oppurtunity.start_date}</p>
        {isApplied ? (
          <button disabled>Apply here</button>
        ): (
          <button onClick={()=>applyOnOpputunity(oppurtunity)}>Apply Here</button>
        )}
    </div>
  )
}
