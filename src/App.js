import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import MarkdownPage from "./pages/MarkdownPage";
function App() {
  const [markdown, setMarkdown] = useState('## markdown preview')
  return (
    <>
      <HomePage />
      <MarkdownPage markdown={markdown} setMarkdown={setMarkdown} />
    </>
  );
}

export default App;
