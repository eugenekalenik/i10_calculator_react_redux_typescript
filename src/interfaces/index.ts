export interface IState {
  firstOperand: number | null;
  secondOperand: number | null;
  displayValue: string;
  operator: string;
}

export interface IPayload {
  firstOperand?: number | null;
  secondOperand?: number | null;
  displayValue?: string;
  operator?: string;
}

export interface IAction {
  type: string;
  payload: IPayload;
}
