import React from "react";
import { Switch, Route, Link, } from "react-router-dom";
import NewPoll from "./NewPoll/NewPoll";
import Poll from "./Poll/Poll";
<<<<<<< HEAD
import Polls from "./Polls/Polls";
=======
>>>>>>> 8726b72f96bb11a017cb551074d9679365acf0b1

const Main = () => (
  <div className="main" role="main">
    <div className="content-wrapper">
      <Switch>
        <Route exact path="/" component={NewPoll} />
        <Route path="/new-poll" component={NewPoll} />
        <Route path="/polls" component={Polls} />
        <Route path="/poll/:pollId" component={Poll} />>
      </Switch>
    </div>
  </div>
);

export default Main;
