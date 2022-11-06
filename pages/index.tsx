import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home page">
        <h1 className={styles["title-homepage"]}>
          Welcome Mohamad Handy Nugraha
        </h1>
      </Layout>
    </>
  );
}
