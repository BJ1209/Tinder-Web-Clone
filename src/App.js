import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <TinderCards />
          <SwipeButtons />
        </Route>
        <Route exact path="/chat">
          <Header backButton="/" />
          <Chats />
        </Route>
        <Route exact path="/chat/:person">
          <Header backButton="/chat" />
          <ChatScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
