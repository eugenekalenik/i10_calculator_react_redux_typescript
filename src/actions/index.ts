import { initialState, IState } from "../reducers";
import { Dispatch } from "redux";
import { ANY_ACTION } from "../constants/action-types";

export const clear = () => (initialState);

export const setDigit = (value: string) => {
  const { firstOperand, operator } = state;

  if (firstOperand === null && value === "0") {
    return;
  }

  if (firstOperand === null) {
    return {
      firstOperand: Number(value),
      displayValue: String(value)
    };
  }

  if (firstOperand !== null && operator === "") {
    return {
      firstOperand: Number(state.firstOperand + value),
      displayValue: String(state.firstOperand + value)
    };
  }

  if (firstOperand !== null && operator !== "") {
    return {
      secondOperand: Number(value),
      displayValue: String(firstOperand + operator + value),
    };
  }
};

export const setOperator = (operator: string) => {
  const { firstOperand } = state;

  if (firstOperand === 0) {
    return;
  }

  return {
    operator: operator,
    displayValue: state.displayValue + operator, firstOperand: Number(state.displayValue),
  };
};

export const setResult = (state: IState) => {
  const { firstOperand, operator, secondOperand } = state;

  if (firstOperand !== null && operator !== "" && secondOperand !== null && secondOperand !== 0) {
    return {
      firstOperand: null,
      secondOperand: null,
      displayValue: eval(firstOperand + operator + secondOperand),
      operator: "",
    };
  } else {
    clear();
    return {
      displayValue: "Error",
    };
  }
};
