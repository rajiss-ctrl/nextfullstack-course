import React from 'react'
import getUser from '@/lib/getUser'
import getUserPosts from '@/lib/getUserPosts'
import { Suspense } from 'react'
import UserPosts from '../components/UserPosts'
import type { Metadata } from 'next'

type Params ={
    params:{
        userId: string
    }
}

export async function generateMetadata({params : {userId}}: Params):Promise<Metadata>{
  const userData : Promise<Users> =  getUser(userId)
  const user: Users = await userData
  return {
    title: user.name,
    description:`This is the page of ${user.name}`
  }
}
const UserPage = async  ({params : {userId}}: Params) => {
  const userData : Promise<Users> =  getUser(userId)
  const userPostsData : Promise<Post[]> =  getUserPosts(userId)

  // const [user, userPosts] = await  Promise.all([userData,userPostsData])
  const user = await userData
  return (
    <>
      <h2 className="text-3xl">{user.name}</h2>
      <br/>
        <Suspense fallback={<p>Loading.....</p>}>
          {/* <UserPosts posts = {userPosts}/> */}
          <UserPosts promise = {userPostsData}/>
        </Suspense>

    </>
  )
}

export default UserPage
