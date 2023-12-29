import React from 'react'

const UserPage = ({params}: any) => {
  return (
    <div className='flex items-center justify-center flex-col min-h-screen py-2'>
    <h1 className='text-center text-white text-2xl'>Profile</h1>
      <hr/>
      <p className='text-4xl'>Profile page 
      <span className='bg-[blue] text-white font-bold p-2'> {params.id}</span>
      </p>
      
    </div>
  )
}

export default UserPage
