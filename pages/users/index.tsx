import React from 'react'
import Layout from '../../components/Layout'

interface UsersProps {
  dataUsers: Array<any>
}
export default function User(props: UsersProps) {
  const { dataUsers } = props
  return (
    <Layout pageTitle="Users page">
      <p>User index root page</p>
      <ul>
        {dataUsers?.map((user: any, index: any) => {
          return (
            <li key={index}>
              {user.name} - {user.email}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
  return {
    props: {
      dataUsers: users
    }
  }
}
