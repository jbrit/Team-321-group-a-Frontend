import React from "react";
import Footer from "../../components/footer/footer.component";

import Header from "../../components/header/header.component";
import "./homepage.styles.css";
import landingpageImage from "../../assets/thunder.jpg";

const HomePage = () => (
  <div>
    <Header />
    <div className=".bg-cover">
      <img src={landingpageImage} alt="landpage" />
    </div>

    <Footer />
  </div>
);

export default HomePage;
