import { combineReducers } from "redux";

export interface IState {
  firstOperand: number | null;
  secondOperand: number | null;
  displayValue: string;
  operator: string;
  clear?: () => void;
  setDigit?: () => void;
  setOperator?: () => void;
  setResult?: () => void;
}

export const initialState = {
  firstOperand: null,
  secondOperand: null,
  displayValue: "0",
  operator: "",
}

export interface IAction {
  type: string;
  [key: string]: any;
}

const firstOperand = (state: number | null = null, action: IAction) => null;
const secondOperand = (state: number | null = null, action: IAction) => null;
const displayValue = (state: string = "0", action: IAction) => "0";
const operator = (state: string = "", action: IAction) => "";

const rootReducer = combineReducers({
  firstOperand,
  secondOperand,
  displayValue,
  operator,
})

export default rootReducer;
