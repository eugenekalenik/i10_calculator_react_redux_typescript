import React, { Component } from 'react';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { clear, setDigit, setOperator, setResult } from '../actions';
import { IState } from '../reducers';

interface IProps {
  firstOperand: number | null;
  secondOperand: number | null;
  displayValue: string;
  operator: string;
  clear: () => void;
  setDigit?: () => void;
  setOperator?: () => void;
  setResult?: () => void;
}

class CalculatorContainer extends Component<IProps, IState> {
  public render() {
    console.log(this.props);
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
              <h1 className="card py-2 px-3 text-right mb-4 text-dark">{this.props.displayValue}</h1>
              <div className="d-flex flex-wrap">

                <button className="btn w-25 btn-lg btn-primary" onClick={this.props.setDigit("9")}>9</button>
                <button className="btn w-25 btn-lg btn-primary" onClick={this.props.setDigit("8")}>8</button>
                <button className="btn w-25 btn-lg btn-primary" onClick={this.props.setDigit("7")}>7</button>
                <button className="btn w-25 btn-lg btn-warning" onClick={this.props.setOperator("+")}>&plus;</button>

                <button className="btn w-25 btn-lg btn-primary" onClick={setDigit("6")}>6</button>
                <button className="btn w-25 btn-lg btn-primary" onClick={setDigit("5")}>5</button>
                <button className="btn w-25 btn-lg btn-primary" onClick={setDigit("4")}>4</button>
                <button className="btn w-25 btn-lg btn-warning" onClick={setOperator("-")}>&minus;</button>

                <button className="btn w-25 btn-lg btn-primary" onClick={setDigit("3")}>3</button>
                <button className="btn w-25 btn-lg btn-primary" onClick={setDigit("2")}>2</button>
                <button className="btn w-25 btn-lg btn-primary" onClick={setDigit("1")}>1</button>
                <button className="btn w-25 btn-lg btn-warning" onClick={setOperator("*")}>&multiply;</button>

                <button className="btn w-25 btn-lg btn-primary" onClick={setDigit("0")}>0</button>
                <button className="btn w-25 btn-lg btn-danger" onClick={this.props.clear}>C</button>
                <button className="btn w-25 btn-lg btn-warning" onClick={setResult}>=</button>
                <button className="btn w-25 btn-lg btn-warning" onClick={setOperator("/")}>&divide;</button>

              </div>
            </div>
            <div className="col-md4-"></div>
          </div>
        </div>
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
  setDigit: (digit: number | null) => dispatch(setDigit(digit)),
  setOperator: (operator: string) => dispatch(setOperator(operator)),
  setResult,
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
