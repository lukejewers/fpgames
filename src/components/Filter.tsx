import React from "react";

const Filter: React.FC<any> = ({ data }) => {
  return (
    <>
      <div className='filter__search'>
        <input type='text' placeholder='Filter...' />
      </div>
      <div className='filter__functions'>
        {data.map((f: any) => (
          <p>{f.name}</p>
        ))}
      </div>
    </>
  );
};

export default Filter;
