import "./App.css";
import Home from "./pages/Home";
import { WagmiConfig } from "wagmi";
import { Web3Modal } from "@web3modal/react";
import { ethereumClient, wagmiClient } from "./utils/WagmiClient";
// import Navbar from "./components/navbar/Navbar";
// import Welcome from "./components/welcome/welcome";
// import About from "./components/aboutus/About";
// import Roadmap from "./components/roadmap/Roadmap";
// import Community from "./components/community/Community";
// import Faq from "./components/faq/Faq";
// import Team from "./components/team/Team";
// import Footer from "./components/footer/Footer";

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

function App() {
  return (
    <div className="App">
      <WagmiConfig client={wagmiClient}>
        <Home />
        {/* <Navbar />
        <Welcome />
        <About />
        <Roadmap />
        <Community />
        <Team />
        <Faq />
        <Footer /> */}
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      {/* <About /> */}
    </div>
  );
}

export default App;
