import Header from "../header/Header";
import Hero from "./hero/Hero";
import WhyGruepr from "./why-gruepr/WhyGruepr.js";
import Footer from "../footer/Footer.js";
import TrustedSchools from "./trusted-schools/TrustedSchools";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <WhyGruepr />
      <TrustedSchools />
      <Footer />
    </div>
  );
};
export default Home;
