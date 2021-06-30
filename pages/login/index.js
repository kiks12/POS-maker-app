/* login page dependencies */
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useText } from "../../custom hooks/useText";

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
            console.log("login");
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
          <button type='submit' onClick={() => console.log("login")}>
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
