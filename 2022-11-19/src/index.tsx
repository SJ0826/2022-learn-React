import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

// Provider: app과 store을 연결
// 가장 상위 컴포넌트에 store를 연결해서 하위 컴포넌트도 store을 사용할 수 있다.
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
