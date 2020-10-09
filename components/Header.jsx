import Link from "next/link";
import css from "./Header.module.scss";

const Header = () => {
  return (
    <header className={css.Header}>
      <a href="#">
        <img className={css.logo} src="/images/logo.svg" />
      </a>
      <nav className={css.nav}>
        <Link href="/">
          <a className={css.navItem}>About</a>
        </Link>
        <Link href="/recruit">
          <a className={css.navItem}>Recruit</a>
        </Link>
        <a className={css.button} href="#join">
          Join Us!
        </a>
      </nav>
    </header>
  );
};

export default Header;
