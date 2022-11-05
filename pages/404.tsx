import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Custom404() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 2000)
  }, [router])
  
  return (
    <div className="title-notfound">
      <h1>Oops!</h1>
      <h1>Halaman yang anda cari tidak ditemukan</h1>
    </div>
  )
}
