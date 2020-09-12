import React from "react";
import Footer from "../../components/footer/footer.component";

import "./homepage.styles.scss";
import landingpageImage from "../../assets/thunder.jpg";

const HomePage = () => (
  <div>
    <div className=".bg-cover">
      <img src={landingpageImage} alt="landpage" />
    </div>

    <Footer />
  </div>
);

export default HomePage;
