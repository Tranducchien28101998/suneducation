import { useRef } from "react";
import About from "../../Components/About/About";
import Carousel from "../../Components/Carousel/Carousel";
import HomeLayout from "../../Components/HomeLayout/HomeLayout";
import Contact from "../../Components/Contact/Contact";

function Home() {
  const targetRefAbout = useRef(null);
  const handleClickAbout = () => {
    targetRefAbout.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <HomeLayout handleClickAbout={handleClickAbout}>
      <Carousel />
      <About targetRefAbout={targetRefAbout} />
      <Contact />
    </HomeLayout>
  );
}

export default Home;
