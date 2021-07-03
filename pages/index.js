/* index page dependencies */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../Components/Header";
import { applySession } from "next-session";

/* index page instance */
export default function Home({ user }) {
  const { username } = user;

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Header username={username} />
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

/* server side logic  */
export const getServerSideProps = async ({ req, res }) => {
  try {
    await applySession(req, res);
    if (!req.session.passport) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    const userInformation = req.session.passport.user;

    return {
      props: {
        user: userInformation,
      },
    };
  } catch (err) {
    console.error(err);
  }
};
