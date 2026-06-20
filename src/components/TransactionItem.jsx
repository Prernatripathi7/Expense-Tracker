import React from "react";
import styled from "styled-components";
import { colors, formatCurrency } from "./theme";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.border};
  background-color: ${colors.white};
  border-radius: 5px;
  padding: 10px 20px;
  border-right: 5px solid
    ${(props) => (props.$isExpense ? colors.expense : colors.income)};
  margin-bottom: 10px;
`;

const Details = styled.span`
  color: ${colors.textDark};
`;

const Amount = styled.span`
  font-weight: 600;
  color: ${(props) => (props.$isExpense ? colors.expense : colors.income)};
`;

const RemoveButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    background-color: ${colors.primaryHover};
  }
`;

const TransactionItem = ({ transaction, removeTransaction }) => {
  const isExpense = transaction?.transType === "expense";

  return (
    <Item $isExpense={isExpense}>
      <Details>{transaction.details}</Details>
      <Amount $isExpense={isExpense}>{formatCurrency(transaction.amount)}</Amount>
      <RemoveButton onClick={() => removeTransaction(transaction.id)}>
        Remove
      </RemoveButton>
    </Item>
  );
};

export default TransactionItem;