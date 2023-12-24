import css from "./style.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/user/UserName">User</a>
      <a href="/not-found">Page 404</a>
    </header>
  );
};

export default Header;
