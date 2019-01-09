import { CLEAR, SET_DIGIT, SET_OPERATOR, SET_RESULT } from "../constants/action-types";
import { IPayload } from "../interfaces";

export const clear = () => {
  return {
    type: CLEAR,
  }
};

export const setDigit = (payload: IPayload) => {
  return {
    type: SET_DIGIT,
    payload,
  }
};

export const setOperator = (payload: IPayload) => {
  return {
    type: SET_OPERATOR,
    payload,
  }
};

export const setResult = (payload: IPayload) => {
  return {
    type: SET_RESULT,
    payload,
  }
};
