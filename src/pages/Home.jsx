import Navbar from "../components/navbar/Navbar";
import Welcome from "../components/welcome/welcome";
import About from "../components/aboutus/About";
import Roadmap from "../components/roadmap/Roadmap";
import Community from "../components/community/Community";
import Team from "../components/team/Team";
import Faq from "../components/faq/Faq";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Roadmap />
      <Community />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
