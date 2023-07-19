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
      <main id="transactionPage" className="main bg-dark">
        <div className="dataHead">
          <div id="arrow" className="dataLineItem"></div>
          <div id="date" className="dataLineItem">
            DATE
          </div>
          <div id="description" className="dataLineItem">
            DESCRIPTION
          </div>
          <div id="amount" className="dataLineItem">
            AMOUNT
          </div>
          <div id="balance" className="dataLineItem">
            BALANCE
          </div>
        </div>
        <TransactionInfos
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="$5.00"
          balance="$2082.79"
          transactionType="Electronic"
          category=" Food"
        />
        <TransactionInfos
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="$10.00"
          balance="$2087.79"
          transactionType="Electronic"
          category=" Food"        />
        <TransactionInfos
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="$20.00"
          balance="$2097.79"
          transactionType="Electronic"
          category=" Food"        />
        <TransactionInfos
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="$30.00"
          balance="$2117.79"
          transactionType="Electronic"
          category=" Food"        />
        <TransactionInfos
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="$40.00"
          balance="$2147.79"
          transactionType="Electronic"
          category=" Food"        />
        <TransactionInfos
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="$50.00"
          balance="$2187.79"
          transactionType="Electronic"
          category=" Food"        />
      </main>
    </>
  );
};
