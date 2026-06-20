import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem.jsx";
import { colors } from "./theme.jsx";

const Container = styled.div``;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
  color: ${colors.textDark};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid ${colors.border};
  background-color: ${colors.surfaceMuted};
  margin-bottom: 25px;
  font-family: inherit;
  font-size: 15px;

  &:focus {
    border-color: ${colors.primary};
  }
`;

const TransactionItems = styled.div``;

const EmptyState = styled.p`
  text-align: center;
  color: ${colors.textMuted};
  padding: 20px 0;
`;

const TransactionsContainer = ({ transactions, removeTransaction }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  useEffect(() => {
    const trimmed = searchInput.trim().toLowerCase();

    if (!trimmed) {
      setFilteredTransactions(transactions);
      return;
    }

    const filtered = transactions.filter((item) =>
      item.details.toLowerCase().includes(trimmed)
    );
    setFilteredTransactions(filtered);
  }, [transactions, searchInput]);

  return (
    <Container>
      <Heading>Transactions</Heading>
      <SearchInput
        type="text"
        placeholder="Search here"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <TransactionItems>
        {filteredTransactions?.length ? (
          filteredTransactions.map((transaction) => (
            <TransactionItem
              transaction={transaction}
              key={transaction.id}
              removeTransaction={removeTransaction}
            />
          ))
        ) : (
          <EmptyState>No Transactions</EmptyState>
        )}
      </TransactionItems>
    </Container>
  );
};

export default TransactionsContainer;