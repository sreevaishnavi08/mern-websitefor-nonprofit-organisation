import React, { useContext, useEffect } from 'react' 
import { CounterContext } from './CounterContext'

function Dashboard() {
  let {user}=useContext(CounterContext)
  if(!user) return ;
  return (
    <div>
       <h6 className='text-end text-center'>Welcome</h6>
       <h5>{user.firstname} {user.lastname}</h5>
    </div>
  )
}

export default Dashboard