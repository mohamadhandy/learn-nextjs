import Link from "next/link"
import styles from './Header.module.css'
export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}><Link href={"/"}>Home</Link></li>
          <li className={styles.item}><Link href={"/users"}>Users</Link></li>
          <li className={styles.item}><Link href={"/users/detail"}>Detail User</Link></li>
          <li className={styles.item}><Link href={"/blog"}>Blog</Link></li>
        </ul>
      </header>
    </>
  )
}
