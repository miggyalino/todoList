import React from 'react'

type ButtonProps = {
    label : string
    variant? : string
}

const Button = ({label, variant}: ButtonProps) => {
  return (
    <button type='submit' className={`${variant}`}>
        {label}
    </button>
  )
}

export default Button