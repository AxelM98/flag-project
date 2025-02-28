import React from "react";
import "./selectRegionBar.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SelectRegionBar = () => {
  return (
    <div className="selectRegionBar">
      <p>Region</p>
      <ArrowDropDownIcon
        style={{ paddingRight: ".5rem", color: "rgb(211, 211, 211, 0.8)" }}
      />
    </div>
  );
};

export default SelectRegionBar;
