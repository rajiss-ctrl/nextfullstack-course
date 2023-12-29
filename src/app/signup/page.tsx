'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'
import toast from 'react-hot-toast'


const SignupPage = () => {
  const router = useRouter()
  const [user, setUser]=useState({
    email:"",
    password:"",
    username:"",
  })
const [buttonDisabled, setButtonDisabled] = useState(false)
const [loading, setLoading] = useState(false)

  const onSignup = async ()=>{
    try {
      setLoading(true)
      const response = await axios.post("/api/users/signup", user)
      console.log("signup successful ", response.data)
      router.push("/login")
    } catch (error:any) {
      console.log("signup failed ", error.message)
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  }

useEffect(()=>{
  if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
    setButtonDisabled(false)
  }else{
    setButtonDisabled(true)
  }
},[user])

  return (
    <div className='flex items-center justify-center flex-col min-h-screen py-2'>
      <h1 className='text-center text-white text-2xl'>{loading ? "Processing" : "Signup"}</h1>
      <label htmlFor="username">username</label>
      <input 
        type="text" 
        id='username'
        value={user.username}
        onChange={(e)=>setUser({...user, username: e.target.value})}
        placeholder='username'
      />
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        id='email'
        value={user.email}
        onChange={(e)=>setUser({...user, email: e.target.value})}
        placeholder='Email'
      />
      <label htmlFor="password">Password</label>
      <input 
        type="password" 
        id='password'
        value={user.password}
        onChange={(e)=>setUser({...user, password: e.target.value})}
        placeholder='Password'
      />
      <button onClick={onSignup} type="button">{buttonDisabled ? "No Signup" : "Signed up"}</button>
      <Link href='/login'>Login here</Link>
    </div>
  )
}

export default SignupPage
