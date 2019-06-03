import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import test2 from "./images/test2.jpg";
import test from "./images/test.jpg";
import "./react.less";

class Search extends React.Component {
  render() {
    return (
      <div className="cnm">
        <h2 className="h1"> {Math.random() + 2}</h2>
        <h2 className="h1"> {Math.random()}</h2>
        <h2 className="h1"> test commitizen</h2>
        {/* <img src={test2} /> */}
      </div>
    );
  }
}

if (module.hot) {
  console.log("tokyo hot.....");
  module.hot.accept();
}
const App = hot(Search);
ReactDOM.render(<Search />, document.getElementById("root"));
