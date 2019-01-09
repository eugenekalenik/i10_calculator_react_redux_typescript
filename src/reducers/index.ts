import { CLEAR, SET_DIGIT, SET_OPERATOR, SET_RESULT } from "../constants/action-types";
import { IState, IAction } from "../interfaces";

export const initialState = {
  firstOperand: null,
  secondOperand: null,
  displayValue: "0",
  operator: "",
}

const rootReducer = (state: IState = initialState, action: IAction) => {
  if (action.type === CLEAR) {
    return initialState;
  }

  if (action.type === SET_DIGIT || action.type === SET_OPERATOR || action.type === SET_RESULT) {
    return { ...state, ...action.payload };
  }

  return state;
};

export default rootReducer;
