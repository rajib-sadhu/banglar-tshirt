import React, { useContext } from 'react'
import { MoneyContext } from './Grandpa'

const Uncle = () => {

    const [money, setMoney] = useContext(MoneyContext)

  return (
    <div>
      <h1>Uncle</h1>
      <p>{money}</p>
      <button className='bg-blue-300 px-2 py-1 rounded-md' onClick={()=>setMoney(1000)}>
        Send 1000
      </button>
    </div>
  )
}

export default Uncle;
