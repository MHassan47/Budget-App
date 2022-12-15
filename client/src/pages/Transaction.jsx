import React from "react";
import BasicLayout from "../components/BasicLayout";
import AllTransactions from "../components/Dashboard/AllTransactions";
import TransactionForm from "../components/Dashboard/TransactionForm";
function Transaction() {
  return (
    <BasicLayout>
      <AllTransactions />
    </BasicLayout>
  );
}

export default Transaction;
