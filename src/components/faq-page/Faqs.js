import Footer from "../footer/Footer";
import Header from "../header/Header";
import Questions from './Questions';
import Youtube from './YouTube';

const Faqs = () => {
  return (
    <div>
      <Header />
      <div class="bg-faq-bg">
        <h1 class=" px-20 py-20 text-3xl text-dark font-bold drop-shadow-lg dmsans ">How Gruepr works</h1>
        
        <Youtube/>
        
        <Questions/>
        <Footer/>
      </div>

    </div>
  );
};
export default Faqs;
