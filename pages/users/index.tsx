import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Users.module.css"

interface UsersProps {
  dataUsers: Array<any>;
}
export default function User(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <Layout pageTitle="Users page">
      {dataUsers?.map((user: any, index: any) => {
        return (
          <div key={index} className={styles.card}>
            <p onClick={() => router.push(`/users/${user.id}`)}>
              {user.name} - {user.email}
            </p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  return {
    props: {
      dataUsers: users,
    },
  };
}
