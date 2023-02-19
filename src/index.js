import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./components/Counter";
import Other from "./components/Other";
import counter from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootEl = document.getElementById("root");

const count = (
  <Provider store={store}>
    <div>
      A react-redux connect function test. Connect is performing comparison for
      each component properties. Only re-render component if property changes.
      <Counter />
      <Other />
    </div>
  </Provider>
);

ReactDOM.render(count, rootEl);
