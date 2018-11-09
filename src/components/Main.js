import React from "react";
<<<<<<< HEAD
import { Switch, Route, Redirect } from "react-router-dom";
import NewPoll from "./NewPoll/NewPoll";
import Poll from "./Poll/Poll";
<<<<<<< HEAD
import Polls from "./Polls/Polls";
=======
>>>>>>> Adds new poll component, success message on form submit, and prevents empty form submission
=======
import { Switch, Route, Link, } from "react-router-dom";
import NewPoll from "./NewPoll/NewPoll";
import Poll from "./Poll/Poll";
import Polls from "./Polls/Polls";
>>>>>>> Adding component that shows all polls

const Main = () => (
  <div className="main" role="main">
    <div className="content-wrapper">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/new-poll" />} />
        <Route path="/new-poll" component={NewPoll} />
        <Route path="/polls" component={Polls} />
        <Route path="/poll/:pollId" component={Poll} />>
      </Switch>
    </div>
  </div>
);

export default Main;
