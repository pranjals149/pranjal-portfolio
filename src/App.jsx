import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        <div style={{ fontSize: "12px" }}>
          <p>Credits:</p>
          <p>
            1. This work is based on "Gaming Desktop PC"
            (https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66)
            by Yolala1232 (https://sketchfab.com/Yolala1232) licensed under
            CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
          </p>

          <p>
            2. This work is based on "Stylized planet"
            (https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70)
            by cmzw (https://sketchfab.com/cmzw) licensed under CC-BY-4.0
            (http://creativecommons.org/licenses/by/4.0/)
          </p>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
