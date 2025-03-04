import React, { useState } from "react";
import "./selectRegionBar.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SelectRegionBar = ({ selectedRegion, setSelectedRegion }) => {
  const [dropdown, setDropdown] = useState(false);

  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <>
      <div className="selectRegionBar" onClick={() => setDropdown(!dropdown)}>
        <p>{selectedRegion}</p>
        <ArrowDropDownIcon className="dropdownIcon" />
        {dropdown && (
          <div className="dropdownMenu">
            {regions.map((region) => (
              <div
                key={region}
                className="menuItem"
                onClick={() => {
                  setSelectedRegion(region);
                }}
              >
                {region}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SelectRegionBar;
