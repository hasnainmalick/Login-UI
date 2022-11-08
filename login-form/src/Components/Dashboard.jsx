import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h3>Hello From Dashboard</h3>
        <button  onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Dashboard