import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
        <Image
          src='/images/logo.png'
          alt='Cleonara'
          height={80}
          width={150} 
        />
    </div>
  )
}

export default Logo