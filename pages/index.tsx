import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Todo } from "../types/todo";

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([
    { id: "0", name: "dummy0", description: "hogehoge" },
    { id: "1", name: "dummy1", description: "fugafuga" },
  ]);

  return (
    <div className={styles.container}>
      <Head>
        <title>TODO 一覧</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>TODO 一覧</h1>
        {todoList.map((todo) => (
          <div key={todo.id} className={styles.grid}>
            <h2>{todo.name}</h2>
            <p>{todo.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
