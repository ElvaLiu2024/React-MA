import React from 'react';
import {useGrid} from '../context/Context';
import Cell from './Cell';

const Grid = () => {

  const { activeCells } = useGrid();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count : {activeCells}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 100px)", gap: "5px", justifyContent: "center" }}>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};

export default Grid;

