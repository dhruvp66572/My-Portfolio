import Hero from "./Hero";
import Technologies from "./Technologies";
import Projects from "./Projects";
import About from "./About";

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      {/* <Experience /> */}
      <Projects count={3} enable={false} />
    </>
  );
};

export default Landing;
