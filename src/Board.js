import React, { useState, useEffect } from "react";

const Hexagon = (c, r, fill) => {
  const x = 0.86602540378; //sqrt(3) / 2

  let pa = [
    [r * (1 - x), r / 2],
    [r * (1 - x), (3 * r) / 2],
    [r, 2 * r],
    [r * (1 + x), (3 * r) / 2],
    [r * (1 + x), r / 2],
    [r, 0],
  ];

  let points = `${r * (1 - x)},${pa[0][1]} ${pa[1][0]},${pa[1][1]} ${
    pa[2][0]
  },${pa[2][1]} ${pa[3][0]},${pa[3][1]} ${pa[4][0]},${pa[4][1]} ${pa[5][0]},${
    pa[5][1]
  }`;
  console.log(r * (1 - x));

  return <polyline id="hexagon" points={points} />;
};

const Board = () => {
  return (
    <div className="board">
      <svg width={800} height={800}>
        <Hexagon r={50.0} />
      </svg>
    </div>
  );
};

export default Board;
