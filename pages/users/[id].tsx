import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}
interface UserDetailProps {
  user: User;
}
interface GetStaticProps {
  params: {
    id: string
  }
}
export default function UserDetail(props: UserDetailProps) {
  const router = useRouter();
  const { user } = props;
  React.useEffect(() => {}, [router.isReady, router.query]);
  return (
    <Layout pageTitle="User detail page">
      <p>
        {user.name} {user.email} - {user.website} - {user.phone}
      </p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  const paths = users.map((user: User) => {
    return {
      params: {
        id: `${user.id}`,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const user = await (
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  ).json();
  return {
    props: {
      user,
    },
  };
}
