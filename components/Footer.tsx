import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='bg-dullWhite'>
      <div className='flexBetween py-4 px-6'>
        <div>
          <p className='text-black regular-16'>Copyright &#169; Alino, Megrino, Vales</p>
        </div>
        <div className='flex gap-6'> 
        <p className='text-black regular-16'>All Rights Reserved</p>
        </div>
      </div>
    </section>
  )
}

export default Footer