import { useState } from "react";

import "./App.css";
import NavBar from "./comp/NavBar";
import Main from "./comp/Main";

// import darkToggle from "./images/darkToggle.png";
// import lightToggle from "./images/lightToggle.png";

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleHandle = () => {
    setIsDark((prevState) => !prevState);
  };

  return (
    <>
      <div className="container">
        {/* <img
          className={`mood-img ${isDark ? "dark" : "light"}`}
          src={isDark ? darkToggle : lightToggle}
          alt="Mood Image"
          onClick={toggleHandle}
        /> */}
        <NavBar isDark={isDark} toggle={toggleHandle} />
        <Main isDark={isDark} />
      </div>
    </>
  );
}

export default App;
