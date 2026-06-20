import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddTransaction from "./AddTransaction.jsx";
import OverviewComponent from "./OverviewComponent.jsx";
import TransactionsContainer from "./TransactionsContainer.jsx";
import { colors, formatCurrency } from "./theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  background-color: ${colors.white};
  padding: 30px 20px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  margin: 10px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 6px;
  color: ${colors.textDark};
`;

const Tagline = styled.p`
  font-size: 15px;
  text-align: center;
  margin-bottom: 20px;
  color: ${colors.primary};
  font-weight: 500;
`;

const TransactionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
`;

const SummaryBox = styled.div`
  flex: 1;
  border: 1px solid ${colors.border};
  border-radius: 5px;
  padding: 10px 20px;
  background-color: ${colors.white};

  & span {
    font-weight: bold;
    font-size: 25px;
    display: block;
    color: ${(props) => (props.$isExpense ? colors.expense : colors.income)};
  }
`;

const Tracker = () => {
  const [toggle, setToggle] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const AddTransactions = (payload) => {
    setTransactions([...transactions, payload]);
  };

  const removeTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;

    transactions.forEach((item) => {
      if (item.transType === "expense") {
        exp += item.amount;
      } else {
        inc += item.amount;
      }
    });

    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <Container>
      <Heading>Expense Tracker</Heading>
      <Tagline>Track every rupee, stay in control</Tagline>
      <OverviewComponent
        toggle={toggle}
        setToggle={setToggle}
        expense={expense}
        income={income}
      />
      {toggle && (
        <AddTransaction
          setToggle={setToggle}
          AddTransactions={AddTransactions}
        />
      )}
      <TransactionDetails>
        <SummaryBox $isExpense>
          Expense <span>{formatCurrency(expense)}</span>
        </SummaryBox>
        <SummaryBox>
          Income <span>{formatCurrency(income)}</span>
        </SummaryBox>
      </TransactionDetails>
      <TransactionsContainer
        transactions={transactions}
        removeTransaction={removeTransaction}
      />
    </Container>
  );
};

export default Tracker;