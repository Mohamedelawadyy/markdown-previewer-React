import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";
import { useLocalStorage } from "./useLocalstorage";
import Docs from "./components/Docs";

const App = () => {
  const [code, setCode] = useLocalStorage("markdown", "## Hello");
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>');
  const [activeTab, setActiveTab] = useState("markdown");

  const openMD = () => {
    setActiveTab("markdown");
  };

  const openPreview = () => {
    setActiveTab("preview");
  };

  const openDocs = () => {
    setActiveTab("docs");
  };

  const handleChange = (e) => {
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };

  const renderContent = () => {
    switch (activeTab) {
      case "markdown":
        return (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        );
      case "preview":
        return (
          <div>
            <textarea value={compiled} />
          </div>
        );
      case "docs":
        return <Docs />;
      default:
        return null;
    }
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">
            MarkDown
          </button>
          <button onClick={openPreview}>Preview</button>
          <button onClick={openDocs}>Docs</button>
        </div>
        {renderContent()}
      </div>
    </>
  );
};

export default App;
