import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import MarkdownPage from "./pages/MarkdownPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  const [markdown, setMarkdown] = useState('## markdown preview')
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/markdown-editor">
          <MarkdownPage markdown={markdown} setMarkdown={setMarkdown} />
        </Route>
      </Switch>


    </Router>
  );
}

export default App;
