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
          padding={15}
        />
        <Text
          text={"Reversed rendering order.\nfillAfterStrokeEnabled = true"}
          x={50}
          y={150}
          fontSize={30}
          stroke={"green"}
          fill={"yellow"}
          strokeWidth={3}
          fillAfterStrokeEnabled
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
