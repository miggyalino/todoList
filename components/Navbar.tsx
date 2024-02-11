import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container'>
      <div>
        <h1 className='bold-20'>To-do List App</h1>
      </div>

      <div className='flex gap-4'>
        <Button 
          label="Sign Up"
          variant="btn_primary"
        />
        <Button 
          label="Log In"
          variant="btn_primary"
        />
      </div>
    </nav>
  )
}

export default Navbar