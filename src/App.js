import React from "react";
import HomePage from "./pages/HomePage";
import MarkdownPage from "./pages/MarkdownPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from "./components/Footer";
function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/markdown-editor">
          <MarkdownPage />
        </Route>
      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
