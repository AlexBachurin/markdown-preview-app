import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import MarkdownPage from "./pages/MarkdownPage";
import Navbar from "./components/Navbar";
function App() {
  const [markdown, setMarkdown] = useState('## markdown preview')
  return (
    <>
      <Navbar />
      <HomePage />
      <MarkdownPage markdown={markdown} setMarkdown={setMarkdown} />
    </>
  );
}

export default App;
