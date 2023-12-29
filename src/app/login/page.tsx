'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'
import toast from 'react-hot-toast'


const LoginPage = () => {
const [buttonDisabled, setButtonDisabled] = useState(false)
const [loading, setLoading] = useState(false)

  const router = useRouter()
  const [user, setUser]=useState({
    email:"",
    password:"",
  })

  const  onLogin = async ()=>{
    try {
      setLoading(true)
      const response = await axios.post("/api/users/login", user)
      console.log("login successful ", response.data)
      toast.success("Login success")
      router.push("/profile")
    } catch (error:any) {
      console.log("LOgin failed ", error.message)
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0 ){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  },[user])
  return (
    <div className='flex items-center justify-center flex-col min-h-screen py-2'>
      <h1 className='text-center text-white text-2xl'>{loading ? "Success" : "Login"}</h1>
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
      <button onClick={onLogin} type="button">Login here</button>
      <Link href='/signup'>Signup here</Link>
    </div>
  )
}

export default LoginPage

