import React from "react";
import TransactionTitle from "../../components/transactions/TransactionTitle";
import TransactionInfos from "../../components/transactions/Transactioninfos";
import "./transactions.css";

export const Transactions = () => {
  return (
    <>
      <TransactionTitle
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        amountDescription="Available Balance"
      />
      <TransactionInfos />
    </>
  );
};
