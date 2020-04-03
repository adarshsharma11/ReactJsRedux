import React from 'react';
import './App.css';
import Root from "./router/root"
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
      <Provider store={store}>
       <Root/>
      </Provider>
  );
}

export default App;
