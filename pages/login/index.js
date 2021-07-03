/* login page dependencies */
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useText } from "../../custom hooks/useText";
import { useFetchJson } from "../../custom hooks/useFetchJson";
import Link from "next/link";
import { applySession } from "next-session";

/* login page instance */
const Login = () => {
  /* login information state - username, password */
  const [userLoginCredentials, setUserLoginCredentials] = useText({
    username: "",
    password: "",
  });

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.container}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <input
            type='text'
            name='username'
            value={userLoginCredentials.username}
            onChange={(event) => setUserLoginCredentials(event)}
          />
          <input
            type='password'
            name='password'
            value={userLoginCredentials.password}
            onChange={(event) => setUserLoginCredentials(event)}
          />
          <button
            type='submit'
            onClick={() => PostLoginRequest(userLoginCredentials)}>
            Login
          </button>
        </form>
        <Link href='/api/auth/google' passHref={true}>
          <button>Login in with Google</button>
        </Link>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  await applySession(req, res);

  if (req.session.passport) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

/* export login page */
export default Login;
