import Link from "next/link"
export default function Header() {
  return (
    <>
      <header>
        <ul>
          <li><Link href={"/users"}>Users</Link></li>
          <li><Link href={"/users/detail"}>Detail User</Link></li>
          <li><Link href={"/blog"}>Blog</Link></li>
        </ul>
      </header>
    </>
  )
}
