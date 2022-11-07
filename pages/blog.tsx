import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css"


interface PostProps {
  id: number
  title: string
  body: string
}
interface BlogProps {
  dataBlog: PostProps[]
}

export default function Blog(props: BlogProps) {
  const { dataBlog } = props;
  return (
    <Layout pageTitle="Blog page">
      {dataBlog?.map((blog: PostProps) => {
        return (
          <div key={blog.id} className={styles.card}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const dataBlog = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
  return {
    props: {
      dataBlog,
    },
  };
}
