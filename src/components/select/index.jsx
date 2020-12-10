import React from "react";
import { FaCaretDown } from "react-icons/fa";
import "./select.css";

const Select = ({ name, children, ...props }) => {
  return (
    <div className="custome_select postion-relative">
      <select name={name} {...props}>
        {children}
      </select>
      <div className="arrow_down">
        <FaCaretDown />
      </div>
    </div>
  );
};

export default Select;
