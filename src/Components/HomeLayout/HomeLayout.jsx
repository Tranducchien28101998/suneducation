/* eslint-disable react/prop-types */
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function HomeLayout({ children, handleClickAbout }) {
  return (
    <div>
      <Header handleClickAbout={handleClickAbout} />
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
