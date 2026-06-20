import { useState } from "react";
import styled from "styled-components";
import { colors } from "./theme";

const Container = styled.div`
  text-align: center;
  border: 1px solid ${colors.border};
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 25px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid ${colors.border};
  font-family: inherit;
  font-size: 15px;

  &:focus {
    border-color: ${colors.primary};
  }
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  margin-left: 10px;
  cursor: pointer;
  color: ${colors.textDark};
`;

const RadioBtn = styled(RadioContainer)`
  margin: 10px 20px 10px 0;
`;

const ErrorText = styled.p`
  color: ${colors.expense};
  font-size: 14px;
  margin: 5px 0 10px;
`;

const SubmitBtn = styled.button`
  background-color: ${colors.primary};
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 15px;

  &:hover {
    background-color: ${colors.primaryHover};
  }
`;

const AddTransaction = ({ setToggle, AddTransactions }) => {
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [transType, setTransType] = useState("expense");
  const [error, setError] = useState("");

  const AddTransactionData = () => {
    const trimmedDetails = details.trim();
    const numericAmount = Number(amount);

    if (!trimmedDetails) {
      setError("Please enter a description for this transaction.");
      return;
    }
    if (!amount || Number.isNaN(numericAmount) || numericAmount <= 0) {
      setError("Please enter a valid amount greater than 0.");
      return;
    }

    AddTransactions({
      amount: numericAmount,
      details: trimmedDetails,
      transType,
      id: Date.now(),
    });
    setAmount("");
    setDetails("");
    setTransType("expense");
    setError("");
    setToggle();
  };

  return (
    <Container>
      <Input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <RadioContainer>
        <RadioBtn>
          <input
            type="radio"
            id="expense"
            name="type"
            value="expense"
            checked={transType === "expense"}
            onChange={(e) => setTransType(e.target.value)}
          />
          <Label htmlFor="expense">Expense</Label>
        </RadioBtn>
        <RadioBtn>
          <input
            type="radio"
            id="income"
            name="type"
            value="income"
            checked={transType === "income"}
            onChange={(e) => setTransType(e.target.value)}
          />
          <Label htmlFor="income">Income</Label>
        </RadioBtn>
      </RadioContainer>
      {error && <ErrorText>{error}</ErrorText>}
      <SubmitBtn onClick={AddTransactionData}>Add Transaction</SubmitBtn>
    </Container>
  );
};

export default AddTransaction;