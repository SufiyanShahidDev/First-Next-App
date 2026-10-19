"use client"
import React, { useState } from 'react'

const Page = () => {
    
    const [count , setCount] = useState(0)
    console.log(count);
    
  return (
    <>
    
    <div>this is a about Page</div>

    <button onClick={() => setCount(count + 1)}>increment</button>
    </>
  )
}

export default Page