import Header from "../components/Header"
import styles from  '../styles/Home.module.css'
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <h1 className={styles["title-homepage"]}>Welcome Mohamad Handy Nugraha</h1>
      <Footer />
    </>
  )
}
