import React from "react";
import "../styles/Counter.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsPersonSquare } from "react-icons/bs";

const Counter = ({
  label,
  count,
  price,
  packagename,
  info,
  onChange,
  groupIcon,
}) => (
  <div className="counter">
    <div className="counter-label">
      <p>
        {groupIcon} {label} <span>QAR</span> <span>{price}</span>
      </p>
      <h3>{packagename}</h3>
    </div>
    <div className="counter-wrap">
      <div className="wrap">
        <p>
          QAR {price} x {count}
        </p>
        <span>{info}</span>
      </div>
      <div className="counter-controls">
        <BsPersonSquare className="grey" />
        <AiOutlineMinus onClick={() => onChange(Math.max(0, count - 1))} />
        <span>{count}</span>
        <AiOutlinePlus onClick={() => onChange(count + 1)} />
      </div>
    </div>
  </div>
);

export default Counter;
