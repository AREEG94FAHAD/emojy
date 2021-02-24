import "./App.css";
import React from "react";
import ListEmojy from "./components/ListEmojy";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmojyDetails from "./components/EmojyDetails";
import EmojyofGroup from "./components/EmojyofGroup";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={ListEmojy} />
        <Switch>
          <Route path="/emojy/:character"  exact component={EmojyDetails} />
          <Route path="/emojy/groub/:groupName"  exact component={EmojyofGroup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
