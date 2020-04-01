import React from "react";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import GitHubPages from "./components";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";

const middlewares = [thunkMiddleware];
const store = createStore(reducer, applyMiddleware(...middlewares));

function App() {
  return (
    <Provider store={store}>
      <GitHubPages />
    </Provider>
  );
}

export default App;
