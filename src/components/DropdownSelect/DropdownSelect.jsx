import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./DropdownSelect.css";

export const DropdownSelect = ({ placeHolder, options }) => {
  // initial state
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
 
  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeHolder;
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
  };
  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-input" onClick={handleInputClick}>
        {showMenu && (
          <div className="dropdown-menu">
            {options.map((option) => (
              <div
                key={option.value}
                className={`dropdown-item ${isSelected(option) && "selected"}`}
                onClick={() => onItemClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <FontAwesomeIcon className="downArrow" icon={faChevronDown} />
          </div>
        </div>
      </div>
    </div>
  );
};
