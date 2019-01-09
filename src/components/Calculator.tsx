import React, { Component } from 'react';

interface IProps {
  firstOperand?: number | null;
  secondOperand?: number | null;
  displayValue?: string;
  operator?: string;
}

interface IState {
  firstOperand: number | null;
  secondOperand: number | null;
  displayValue: string;
  operator: string;
}

const initialState = {
  firstOperand: null,
  secondOperand: null,
  displayValue: "0",
  operator: "",
}

class Calculator extends Component<IProps, IState> {
  public state = initialState;

  public setDigit = (e: any) => {
    const { firstOperand, operator, secondOperand } = this.state;
    const value = e.target.innerText;

    if (firstOperand === null && value === "0") {
      return;
    }

    if (firstOperand === null) {
      this.setState({
        firstOperand: Number(value),
        displayValue: String(value)
      });
    }

    if (firstOperand !== null && operator === "") {
      this.setState({
        firstOperand: Number(this.state.firstOperand + value),
        displayValue: String(this.state.firstOperand + value)
      });
    }

    if (firstOperand !== null && operator !== "") {
      this.setState({
        secondOperand: Number(value),
      });
      this.setState({
        displayValue: String(firstOperand + operator + value),
      });
    }
  }

  public setOperator = (e: any) => {
    const { firstOperand } = this.state;
    const operator = e.target.innerText;

    if (firstOperand === 0) {
      return;
    }

    this.setState({ operator: operator, displayValue: this.state.displayValue + operator, firstOperand: Number(this.state.displayValue) });
  }

  public clear = () => {
    this.setState(initialState);
  }

  public setResult = () => {
    const { firstOperand, operator, secondOperand } = this.state;

    if (firstOperand !== null && operator !== "" && secondOperand !== null && secondOperand !== 0) {
      this.setState({
        firstOperand: null,
        secondOperand: null,
        displayValue: eval(firstOperand + operator + secondOperand),
        operator: "",
      });
    } else {
      this.clear();
      this.setState({
        displayValue: "Error",
      });
    }

    return;
  }

  public render() {
    const { displayValue } = this.state;

    console.log(this.state);

    return (
      <div className="container my-auto">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card p-4 bg-dark text-light">
              <div className="mb-4 d-flex justify-content-between align-items-center">
                <h3 className="m-0">CITIZEN</h3>
                <h5 className="m-0">SDC-810BN</h5>
              </div>
              <h1 className="card py-2 px-3 text-right mb-4 text-dark">{displayValue}</h1>
              <div className="d-flex flex-wrap">
                <button className="btn w-25 btn-lg btn-primary" onClick={this.setDigit}>9</button>
                <button className="btn w-25 btn-lg btn-primary" onClick={this.setDigit}>8</button>
                <button className="btn w-25 btn-lg btn-primary" onClick={this.setDigit}>7</button>
                <button className="btn w-25 btn-lg btn-warning" onClick={this.setOperator}>+</button>
                <br />
                <button className="btn w-25 btn-lg btn-primary" onClick={this.setDigit}>6</button>
                <button className="btn w-25 btn-lg btn-primary" onClick={this.setDigit}>5</button>
                <button className="btn w-25 btn-lg btn-primary" onClick={this.setDigit}>4</button>
                <button className="btn w-25 btn-lg btn-warning" onClick={this.setOperator}>-</button>
                <br />
                <button className="btn w-25 btn-lg btn-primary" onClick={this.setDigit}>3</button>
                <button className="btn w-25 btn-lg btn-primary" onClick={this.setDigit}>2</button>
                <button className="btn w-25 btn-lg btn-primary" onClick={this.setDigit}>1</button>
                <button className="btn w-25 btn-lg btn-warning" onClick={this.setOperator}>*</button>
                <br />
                <button className="btn w-25 btn-lg btn-primary" onClick={this.setDigit}>0</button>
                <button className="btn w-25 btn-lg btn-danger" onClick={this.clear}>C</button>
                <button className="btn w-25 btn-lg btn-warning" onClick={this.setResult}>=</button>
                <button className="btn w-25 btn-lg btn-warning" onClick={this.setOperator}>/</button>
                <br />
              </div>
            </div>
            <div className="col-md4-"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
