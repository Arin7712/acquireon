import React from 'react'
import { navItems } from '@/constants'
import { Button } from './ui/button'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='absolute w-full flex items-center justify-between py-4 px-6 md:px-[6rem] bg-neutral-900 text-white z-10'>
      <div className='flex items-center gap-2'>
        <Image src='/logo.png' alt='logo' width={30} height={40} />
        <h1 className='text-2xl font-bold'>Acquireon</h1>
      </div>

      <div className='md:block hidden'>
        <ul className='flex gap-6'>
        {
            navItems.map((item,i) => (
                <li key={i} className='text-sm'>
                    {item.name}
                </li>
            ))
        }
        </ul>
      </div>

      <div>
        <Button className='bg-indigo-500 rounded-full px-6 uppercase'>Contact us</Button>
      </div>
    </nav>
  )
}

export default Navbar
