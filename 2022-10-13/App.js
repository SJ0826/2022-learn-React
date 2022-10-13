import React from "react";
import CounterContainer from "./components/CounterContainer";
import TodosContainer from "./containers/Todoscontainer";


function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
   </div>
  );
}

export default App;
