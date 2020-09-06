import React from "react";
import EditorLeft from "./EditorLeft";
import EditorRight from "./EditorRight";
import Editor from "./Editor";
import "./index.scss";

class Scene extends React.Component {
  render() {
    return (
      <div className="editor-container">
        <EditorLeft />
        <Editor />
        <EditorRight />
      </div>
    );
  }
}

export default Scene;
