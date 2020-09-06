import React, { useState, useEffect } from "react";
import Moveable from "react-moveable";

function Editor() {
  const [height, setHeight] = useState(1000);
  useEffect(() => {
    function setEditorHeight() {
      const containerDom: HTMLDivElement | null = document.querySelector(
        ".container"
      );
      if (containerDom !== null) {
        const width = containerDom.offsetWidth;
        if (width * (9 / 16) !== height) {
          setHeight(width * (9 / 16));
        }
      }
    }
    window.addEventListener("resize", setEditorHeight);
    return () => {
      window.removeEventListener("resize", setEditorHeight);
    };
  });
  return (
    <div className="editor">
      <div className="container" style={{ height: height }}>
        <Moveable
          target={document.querySelector<HTMLElement>(".box")}
          container={document.body}
          draggable={true}
          rotatable={false}
          pinchable={false}
          scalable={false}
          warpable={false}
          throttleDrag={1}
          throttleRotate={0.2}
          throttleResize={1}
          throttleScale={0.01}
          origin={false}
        />
        <div className="box">
          <div className="moveable">moveable</div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
