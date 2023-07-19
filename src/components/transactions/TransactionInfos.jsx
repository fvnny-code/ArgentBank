import React, { useRef, useState } from "react";
import "../../pages/Account/transactions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { DropdownSelect } from "../DropdownSelect/DropdownSelect";

export default function TransactionInfos({
  date,
  description,
  amount,
  balance,
  transactionType,
  category,
}) {
  const arrowUp = useRef();
  const arrowDown = useRef();
  const moreInfo = useRef();
  const edit = useRef();

  const [isEditing, setIsEditing] = useState(false);
  const [isNoting, setIsNoting] = useState(false);
  const options = [
    { value: "", label: "Select..." },
    { value: "food", label: "Food" },
    { value: "pet", label: "Pet" },
    { value: "apparel", label: "Apparel" },
  ];

  function openClose() {
    arrowDown.current.classList.toggle("downArrow_no");
    arrowUp.current.classList.toggle("upArrow_yes");
    moreInfo.current.classList.toggle("moreInfo_open");
  }

  function selecCategory() {
    setIsEditing(true);
    edit.current.classList.toggle("categorySelect_open");
  }
  // Cancel Edit
  const handleCancelEdit = () => {
    setIsEditing(false);
  };
  // save Edit
  const handleSaveEdit = () => {
    setIsEditing(false);
  };


  function addNotes() {
    setIsNoting(true);
    edit.current.classList.toggle("addNotes_open");
  }
  // Cancel Notes
const handleCancelNotes = ()=> {
  setIsNoting(false)
}
  // Save Notes
const handleSaveNotes = ()=> {
  setIsNoting(false)
}
  return (
    <>
      <div className="dataLine">
        <div id="arrow" onClick={openClose}>
          <FontAwesomeIcon
            className="downArrow"
            ref={arrowDown}
            icon={faChevronDown}
          />
          <FontAwesomeIcon
            className="upArrow"
            ref={arrowUp}
            icon={faChevronUp}
          />
        </div>
        <div id="date">{date}</div>
        <div id="description">{description}</div>
        <div id="amount">{amount}</div>
        <div id="balance">{balance}</div>
      </div>
      <div className="moreInfo" ref={moreInfo}>
        <p>Transaction Type: {transactionType}</p>
        <div className="categoryEdit">
          <p>Category :{category}</p>

          {!isEditing && (
            <FontAwesomeIcon
              className="pencil"
              icon={faPen}
              ref={edit}
              onClick={selecCategory}
            />
          )}
          {isEditing && (
            <div className="categoryEdit_open">
              <DropdownSelect placeHolder="Select..." options={options} />
              <button type="submit" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          )}
        </div>
        <p>
          Notes:{" ... "}
          {!isNoting && (
            <FontAwesomeIcon
              className="pencil"
              ref={edit}
              icon={faPen}
              onClick={addNotes}
            />
          )}
          {isNoting && (
            <div className="addNotes_open">
              <textarea rows="3" cols="33"></textarea>
              <div>
                <button type="submit" onClick={handleSaveNotes}>
                  Save
                </button>
                <button type="submit" onClick={handleCancelNotes}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </p>
      </div>
    </>
  );
}
