"use client";
import React from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from "victory";

const Graph = ()=>{
  return (
    <VictoryChart
    theme={VictoryTheme.material}
    >
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc"}
        }}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 7 }
        ]}
      />
    </VictoryChart>
  );
}

export default Graph;