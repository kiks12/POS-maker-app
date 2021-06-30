import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <div className='card'>
          <h1>Hello from POS maker</h1>
          <button>Hello</button>
        </div>
      </div>
    </>
  );
}
