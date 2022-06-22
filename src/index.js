import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text
          text={"horizontal"}
          x={20}
          y={70}
          fontSize={24}
          fill={"black"}
          fontFamily={"Calibri"}
          padding={15}
          draggable
        />
        <Text
          text={"vertical"}
          x={150}
          y={70}
          fontSize={24}
          fill={"black"}
          fontFamily={"Calibri"}
          padding={15}
          draggable
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
