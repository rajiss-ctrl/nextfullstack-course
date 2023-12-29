import Link from 'next/link'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className='flex items-center justify-center flex-col min-h-screen py-2'>
    <h1 className='text-center text-white text-2xl'>Profile</h1>
      <hr/>
      <p>Profile</p>
      <Link href='/'>Home</Link>
    </div>
  )
}

export default ProfilePage
