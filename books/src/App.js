import "./App.css";
import Firstpage from "./Firstpage.js";
import Page from "./Page1.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Pager from "./BookDetails/Page.js";
function App() {
  const log = useSelector((state) => state.counter.login);
  // console.log(log);
  if (log) {
    // console.log("here");
    localStorage.setItem("cred", log);
  }
  const el = localStorage.getItem("cred");
  // const { id } = useParams();
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            {!log && <Firstpage></Firstpage>}
            {log && <Redirect to="/search" exact></Redirect>}
          </Route>

          <Route path="/search" exact>
            {log && <Page></Page>}
            {!log && el && <Page></Page>}
            {!log && !el && <Redirect to="/" exact></Redirect>}
          </Route>
          <Route path="/book/:id" exact>
            {log && <Pager></Pager>}
            {!log && el && <Pager></Pager>}
            {!log && !el && <Redirect to="/" exact></Redirect>}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
