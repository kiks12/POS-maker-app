/* index page dependencies */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../Components/Header";
import { useSession, signIn, signOut } from "next-auth/client";

/* index page instance */
export default function Home() {
  const [session] = useSession();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <p>{session ? "logged in" : "logged out"}</p>
        {session ? (
          <button onClick={() => signOut}>Log out.</button>
        ) : (
          <button onClick={signIn}>Log in.</button>
        )}
        <Header />
        <div className='container'>
          <div className='card'>
            <h1>Hello from POS maker</h1>
            <button>Hello</button>
          </div>
        </div>
      </main>
    </>
  );
}
