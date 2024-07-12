import React from "react";

const ExponentFour = ({ count }) => {
  const exponent = Math.pow(count, 4); // Corrected to calculate count^3
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁴</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} ={" "}
        <span className="total">{exponent}</span>
      </p>
    </div>
  );
};

export default ExponentFour;
