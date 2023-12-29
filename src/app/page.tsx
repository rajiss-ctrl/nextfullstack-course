import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <Link href='/users'>Users</Link>
      <Link href='/signup'>Sign uo</Link>
    </main>
  )
}
