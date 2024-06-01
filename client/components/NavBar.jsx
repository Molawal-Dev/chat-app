import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs' 
import React from 'react'


const NavBar = () => {

  const { userId } = auth();
  console.log(userId)

  return (
    <nav className='mb-2 fixed top-0 right-0 w-full p-3 bg-white z-10 flex items-center justify-between'>
      
      <div>
        <h1 className='font-bold text-3xl text-red-400'>Dev<span className='text-black'>Talk</span><span className='text-sm'>👨🏻‍💻</span></h1>
      </div>

      {
        !userId ? (    
          <div className='flex items-center justify-center gap-3'>
            <Link
              href='sign-in'
              className='text-white rounded-full py-1 px-4 link'
            >
              Sign In
            </Link>

            <Link
              href='sign-up'
              className='text-white rounded-full py-1 px-4 link'
            >
              Sign Up
            </Link>
          </div>
        ):(
          <div className='flex items-center justify-center gap-5'>
            <Link 
              href='profile'
              className='text-white rounded-full py-1 px-4 link'
            >
              Profile
            </Link>
            <UserButton afterSignOutUrl='/'/>
          </div>
        )
      }

    </nav>
  )
}

export default NavBar
