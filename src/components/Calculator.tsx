import React from 'react';
import Top from './Top';
import Display from '../containers/Display';
import Buttons from '../containers/Buttons';

const Calculator = () => {
  return (
    <div className="calculator m-auto">
      <div className="card p-4 bg-dark text-light">
        <Top />
        <Display />
        <Buttons />
      </div>
    </div>
  );
}

export default Calculator;
