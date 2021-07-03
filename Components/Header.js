/* Header component dependencies */
import styles from "../styles/Header.module.css";
import Link from "next/link";

/* Header component instance */
const Header = ({ username }) => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div>Logo</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Create App</li>
            <Link href='/api/logout' passHref={true}>
              <li>{username ? username : "guest"}</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
