import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <section className="appContent">
        {children}
        <Footer />
      </section>
    </>
  );
};

export default Layout;
