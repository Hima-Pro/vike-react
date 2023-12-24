import Footer from "../Footer";
import Header from "../Header";
import css from "./style.module.css";
import "#/global.css";

const Layout = ({ children }) => {
  return (
    <section className={css.appLayout}>
      <Header />
      <div className={css.appContent}>
        {children}
        <Footer />
      </div>
    </section>
  );
};

export default Layout;
