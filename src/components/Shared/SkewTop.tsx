import React from 'react';

function SkewTop(props: { color: string }) {
  return (
    <>
      {props.color && (
        <div
          style={{ borderLeftColor: props.color }}
          className={`absolute top-0 w-full h-0 border-t-0 border-r-0 border-b-[30px] border-l-[95.5vw] border-t-transparent border-r-transparent border-b-transparent border-l-${props.color} `}
        ></div>
      )}
    </>
  );
}

export default SkewTop;
