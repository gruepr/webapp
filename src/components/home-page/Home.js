import Header from "../header/Header";
import Hero from "./hero/Hero";
import WhyGruepr from "./why-gruepr/WhyGruepr.js";
import Features from "./features/Features.js";
import TrustedSchools from "./trusted-schools/TrustedSchools";
import Footer from "../footer/Footer.js";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <WhyGruepr />
      <Features />
      <TrustedSchools />
      <Footer />
    </div>
  );
};
export default Home;
