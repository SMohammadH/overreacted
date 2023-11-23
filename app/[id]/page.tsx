import { montserrat } from "../font";
import { Post } from "../page";
import styles from "./page.module.scss";

export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return posts.map((post: Post) => ({
    id: post.id.toString(),
  }));
}

async function getPost(id: string) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  const postWithDate = { ...post, date: new Date(2023, 7, post.id) };
  return postWithDate;
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  return (
    <div>
      <h1 className={`${styles.title} ${montserrat.className}`}>
        {post.title}
      </h1>
      <p className={styles.date}>
        {post.date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p>{post.body}</p>
    </div>
  );
}
