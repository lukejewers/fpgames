import React from "react";
import Function from "./Function";

const Lib: React.FC<any> = ({ data }) => {
  return (
    <div>
      <h1>Lib</h1>
      {data.map((f: any) => (
        <Function f={f} />
      ))}
    </div>
  );
};

export default Lib;
