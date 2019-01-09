import React, { Component } from 'react';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { clear, setDigit, setOperator, setResult } from '../actions';
import { IState, IPayload } from '../interfaces';

interface IProps {
  firstOperand: number | null;
  secondOperand: number | null;
  displayValue: string;
  operator: string;
  clear: () => void;
  setDigit: (payload: IPayload) => void;
  setOperator: (payload: IPayload) => void;
  setResult: (payload: IPayload) => void;
}

class Buttons extends Component<IProps> {
  public setDigit = (digit: string) => () => {
    const { firstOperand, secondOperand, operator } = this.props;

    if (firstOperand === null && digit === "0") {
      return;
    }

    if (firstOperand === null) {
      this.props.setDigit({
        firstOperand: Number(digit),
        displayValue: String(digit),
      });
    }

    if (firstOperand !== null && operator === "") {
      this.props.setDigit({
        firstOperand: Number(firstOperand + digit),
        displayValue: String(firstOperand + digit),
      });
    }

    if (firstOperand !== null && operator !== "") {
      this.props.setDigit({
        secondOperand: Number(Number(secondOperand) + digit),
        displayValue: this.props.displayValue + digit,
      });
    }
  }

  public setOperator = (operator: string) => () => {
    const { firstOperand, secondOperand, displayValue } = this.props;
    const tmp = Number(displayValue);

    if (firstOperand === null && secondOperand === null) {
      return;
    }

    if (firstOperand === 0) {
      return;
    }

    if (firstOperand === null) {
      const tmp = Number(firstOperand);

      this.props.setOperator({
        firstOperand: Number(firstOperand) + tmp,
      });
    }

    this.props.setOperator({
      firstOperand: Number(displayValue),
      operator: operator,
      displayValue: tmp + operator,
    });
  }

  public clear = () => {
    this.props.clear();
  }

  public setResult = () => {
    const { firstOperand, operator, secondOperand, displayValue } = this.props;

    if (firstOperand !== null && operator !== "" && secondOperand !== null && secondOperand !== 0) {
      const res = eval(displayValue);

      this.props.setResult({
        firstOperand: null,
        secondOperand: null,
        operator: "",
        displayValue: res.toString().length > 7 ? res.toFixed(7) : res,
      });
    }

    if (operator === "/" && secondOperand === 0) {
      this.props.setResult({
        firstOperand: null,
        secondOperand: null,
        operator: "",
        displayValue: "Error: / to 0",
      });
    }

    return;
  }

  public render() {
    return (
      <div className="d-flex flex-wrap">

        <button className="btn w-25 btn-lg btn-primary" onClick={ this.setDigit("9") }>9</button>
        <button className="btn w-25 btn-lg btn-primary" onClick={ this.setDigit("8") }>8</button>
        <button className="btn w-25 btn-lg btn-primary" onClick={ this.setDigit("7") }>7</button>
        <button className="btn w-25 btn-lg btn-warning" onClick={ this.setOperator("-") }>&minus;</button>

        <button className="btn w-25 btn-lg btn-primary" onClick={ this.setDigit("6") }>6</button>
        <button className="btn w-25 btn-lg btn-primary" onClick={ this.setDigit("5") }>5</button>
        <button className="btn w-25 btn-lg btn-primary" onClick={ this.setDigit("4") }>4</button>
        <button className="btn w-25 btn-lg btn-warning" onClick={ this.setOperator("/") }>&divide;</button>

        <button className="btn w-25 btn-lg btn-primary" onClick={ this.setDigit("3") }>3</button>
        <button className="btn w-25 btn-lg btn-primary" onClick={ this.setDigit("2") }>2</button>
        <button className="btn w-25 btn-lg btn-primary" onClick={ this.setDigit("1") }>1</button>
        <button className="btn w-25 btn-lg btn-warning" onClick={ this.setOperator("*") }>&times;</button>

        <button className="btn w-25 btn-lg btn-primary" onClick={ this.setDigit("0") }>0</button>
        <button className="btn w-25 btn-lg btn-danger " onClick={ this.clear }>C</button>
        <button className="btn w-25 btn-lg btn-warning" onClick={ this.setResult }>=</button>
        <button className="btn w-25 btn-lg btn-warning" onClick={ this.setOperator("+") }>+</button>

      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  firstOperand: state.firstOperand,
  secondOperand: state.secondOperand,
  displayValue: state.displayValue,
  operator: state.operator,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clear: () => dispatch(clear()),
  setDigit: (payload: IPayload) => dispatch(setDigit(payload)),
  setOperator: (payload: IPayload) => dispatch(setOperator(payload)),
  setResult: (payload: IPayload) => dispatch(setResult(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
