import React, { useRef } from "react";
import "../../pages/Account/transactions.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

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

  function openClose(){
    arrowDown.current.classList.toggle('downArrow_no');
    arrowUp.current.classList.toggle('upArrow_yes');
    moreInfo.current.classList.toggle('moreInfo_open');

  }
  function selecCategory(){
    alert("Select a category");
  }
  function addNotes(){
    alert ("Add notes");
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
        <p>Transaction Type: {transactionType}

        </p>
        <p>
          Category: {category}{" "}
          <FontAwesomeIcon 
          className="pencil" 
          icon={faPen} 
          onClick={selecCategory}
          />
        </p>
        <p>
            Notes: {" "}
            <FontAwesomeIcon 
            className="pencil" 
            icon={faPen} 
            onClick={addNotes}
            />

        </p>
      </div>
    </>
  );
}
