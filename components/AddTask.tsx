'use client';

import React, { useState } from 'react'
import Button from './Button'
import { useRouter } from 'next/navigation';


const AddTask = () => {

  const router = useRouter()
  const [title, setTitle] = useState('')

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      fetch('/api/add-todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title})
      })
      setTitle('')
      router.refresh()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-3'>
        <input type="text" name='title' placeholder='Learn Typescript' className='rounded-full py-3 px-7 text-black' onChange={handleTitleChange}/>
        <Button 
        label="Add Task"
        variant="btn_primary"
        />
    </form>
  )
}

export default AddTask