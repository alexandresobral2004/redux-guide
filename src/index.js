import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//imports do redux
import {Provider} from 'react-redux'
import store from './redux/store'



import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <Provider store={store}>
      <App />
    </Provider>
=======
  <Provider store={store}>
    <App />

  </Provider>
>>>>>>> Stashed changes
  </React.StrictMode>
);

reportWebVitals();
