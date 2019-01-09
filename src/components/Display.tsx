import React from "react";

const Display = (props: { displayValue: string }) => {
  return (
    <h1 className="card py-2 px-3 text-right mb-4 text-dark">{ props.displayValue }</h1>
  )
}

export default Display;