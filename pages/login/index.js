/* login page dependencies */
import Head from "next/head";
import styles from "../../styles/Login.module.css";
import { useText } from "../../custom hooks/useText";
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
      <div className='container center h-100'>
        <div className='card'>
          <h1>Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className='column'>
            <div className='row'>
              <label style={{ margin: "0px 10px 0px 0px" }}>Username</label>
              <input
                type='text'
                name='username'
                value={userLoginCredentials.username}
                onChange={(event) => setUserLoginCredentials(event)}
              />
            </div>
            <div className='row'>
              <label style={{ margin: "0px 10px 0px 0px" }}>Password</label>
              <input
                className='form-control'
                type='password'
                name='password'
                value={userLoginCredentials.password}
                onChange={(event) => setUserLoginCredentials(event)}
              />
            </div>
            <button
              type='submit'
              onClick={() => PostLoginRequest(userLoginCredentials)}>
              Login
            </button>
            <Link href='/api/auth/google' passHref={true}>
              <button>Login in with Google</button>
            </Link>
          </form>
        </div>
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
