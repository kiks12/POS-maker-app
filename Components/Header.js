/* Header component dependencies */
import styles from "../styles/Header.module.css";

/* Header component instance */
const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div>Logo</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Create App</li>
            <li>Username</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
