import styled from "styled-components";
import { colors, formatCurrency } from "./theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const Balance = styled.h2`
  font-weight: 500;
  color: ${colors.textDark};

  & span {
    font-weight: bold;
    color: ${(props) => (props.$isNegative ? colors.expense : colors.income)};
  }
`;

const AddBtn = styled.button`
  cursor: pointer;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 7px 20px;
  font-size: 16px;
  border: none;
  text-transform: uppercase;
  border-radius: 5px;
  font-family: inherit;

  &:hover {
    background-color: ${colors.primaryHover};
  }
`;

const OverviewComponent = ({ toggle, setToggle, income, expense }) => {
  const bal = income - expense;

  return (
    <Container>
      <Balance $isNegative={bal < 0}>
        Balance <span>{formatCurrency(bal)}</span>
      </Balance>
      <AddBtn onClick={() => setToggle(!toggle)}>
        {toggle ? "Cancel" : "Add"}
      </AddBtn>
    </Container>
  );
};

export default OverviewComponent;