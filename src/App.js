import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";
import Test from "./components/Test/Test";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <Home name="Demo" />;
            }}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/posts/:postId" component={Test} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
