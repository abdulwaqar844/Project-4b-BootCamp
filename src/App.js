import React from "react"
import './App.css';
import MenuBar from "./Components/MenuBar"
import Main from "./Components/maincontainer"
import Services from "./Components/Services"
import Portfolio from "./Components/Portfolio"

function App() {
  return (
    <div >
      <MenuBar />
      <Main />
      <Services />
<Portfolio />
    </div>
  );
}

export default App;
