import { initialState, IState } from "../reducers";

export const clear = () => (initialState);

export const setDigit = (value: string) => {
  const { firstOperand, operator } = initialState;

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
      firstOperand: Number(firstOperand + value),
      displayValue: String(firstOperand + value)
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
  const { firstOperand, displayValue } = initialState;

  if (firstOperand === 0) {
    return;
  }

  return {
    operator: operator,
    displayValue: displayValue + operator, firstOperand: Number(displayValue),
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
