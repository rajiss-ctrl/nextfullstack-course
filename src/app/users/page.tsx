import React from 'react'
import { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'

export const metadata : Metadata = {
    title: 'Users'
}

const UsersPage = async () => {
    const userData :Promise<Users[]> = getAllUsers()

    const users = await userData

    const content =(
        <section>
            <h2>
                <Link href='/'>back to Home</Link>
            </h2>
            <br/>
            {users.map(user=>{
                return (
                    <>
                    <p key={user.id}>
                        <Link href={`/users/${user.id}/`}>{user.name}</Link>
                    </p>
                    <br/>
                    </>
                )
            })}
        </section>
    )
  return content;
}

export default UsersPage
