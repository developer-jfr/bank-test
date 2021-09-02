import React, { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/redux-store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bank from "./components/bank/Bank";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { AccountBox } from "./components/accountBox";
import AddTrans from "./components/bank/AddTrazaction/AddTranzaction";

function MainApp() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <Router>
      <Navbar toggle={toggle} />

      <SideBar isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact render={() => <Bank />} />
        <Route path="/add" component={AddTrans} />
        <Route path="/auth" exact component={AccountBox} />
      </Switch>
    </Router>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
