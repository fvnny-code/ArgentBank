import React from "react";

export default function TransactionTitle({title, amount, amountDescription}){
  return (
    <section className="titleSection">
      <div className="titleSection-content-wrapper">
        <h3 className="titleSection-title">{title}</h3>
        <p className="titleSection-amount">{amount}</p>
        <p className="titleSection-amount-description">{amountDescription}</p>
      </div>
    </section>
  );
};
