import React from "react";
import Button from "./components/Button";
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">Button</Button>
        <Button>Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">Button</Button>
        <Button color="gray">Button</Button>
        <Button color="gray" size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">Button</Button>
        <Button color="pink">Button</Button>
        <Button color="pink" size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" outline={true}>Button</Button>
        <Button color="gray" outline={true}>Button</Button>
        <Button color="pink" size="small" outline={true}>Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>
          Button
        </Button>
        <Button size="large" color="gray" fullWidth>
          Button
        </Button>
        <Button color="pink" size="large" fullWidth onClick={() => {
          console.log('클릭!');
        }}
        onMouseMove={() => {
          console.log('마우스무브!');
        }}>
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;