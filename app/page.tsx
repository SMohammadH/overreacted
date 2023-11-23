import { montserrat } from "./font";
import styles from "./page.module.scss";
import Link from "next/link";

export type Post = {
  id: number;
  title: string;
  body: string;
  date: Date;
};

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const postsWithDate = posts.map((post: Post) => ({
    ...post,
    date: new Date(2023, 7, post.id),
    body: post.body.split(" ").slice(0, 7).join(" "),
  }));

  const sortedPosts = postsWithDate.sort(
    (objA: { date: number }, objB: { date: number }) => objB.date - objA.date
  );
  return sortedPosts;
}

export default async function Home() {
  const sortedPosts = await getPosts();

  return (
    <main className={styles.main}>
      {sortedPosts.map(({ id, title, body, date }: Post) => (
        <Link key={id} href={id.toString()}>
          <div className={styles.post}>
            <h2 className={`${styles.post_title} ${montserrat.className}`}>
              {title}
            </h2>
            <p className={styles.post_date}>
              {date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className={styles.post_body}>{body}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}
