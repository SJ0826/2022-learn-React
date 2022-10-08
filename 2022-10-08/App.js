import React from "react";
import Button from "./components/Button";
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="Buttons">
        <Button size={"large"}>Button</Button>
        <Button size={"medium"}>Button</Button>
        <Button size={"small"}>Button</Button>
      </div>
    </div>
  );
}

export default App;
