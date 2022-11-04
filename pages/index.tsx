import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header>
        <ul>
          <li><Link href={"/users"}>Users</Link></li>
          <li><Link href={"/blog"}>Blog</Link></li>
        </ul>
      </header>
      <h1>Welcome Mohamad Handy Nugraha</h1>
    </>
  )
}
