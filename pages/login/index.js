/* login page dependencies */
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useText } from "../../custom hooks/useText";
import fetch from "node-fetch";

/* post login request to api - confirm login */
const postLoginRequest = async (loginCredentials) => {
  try {
    await fetch("/api/login/", {
      method: "POST",
      body: JSON.stringify(loginCredentials),
    });
  } catch (err) {
    console.error(err);
  }
};

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
            onClick={() => postLoginRequest(userLoginCredentials)}>
            Login
          </button>
        </form>
        <button>Login in with Google</button>
      </div>
    </>
  );
};

/* export login page */
export default Login;
