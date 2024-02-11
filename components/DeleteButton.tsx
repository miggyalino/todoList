'use client';

import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation';
import React, { use } from 'react'

type idProps = {
    todoId: string
}

const Button = ({todoId}: idProps) => {
  
  const router = useRouter()

  async function handleClick(){
    try {
        await fetch(`/api/todo/${todoId}`, {
            method: 'DELETE'
          })
        router.refresh()
    } catch (error) {
        console.log(error)
    }
    
  }

  return (
    <button onClick={handleClick} className='border-none bg-red-700 px-5 py-1 text-white hover:bg-red-900 font-bold rounded-full'>
        Remove
    </button>
  )
}

export default Button