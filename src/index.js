import * as React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import './reset.css'

import { Provider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);