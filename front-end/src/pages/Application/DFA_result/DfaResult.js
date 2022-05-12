import React from "react";
import "./dfaresult.css";

const DfaResult = () => {
  return (
    <div className="result__wrapper">
      <div className="dfa__result__container">
        <div className="dfa__result__text__wrapper">
          <p className="dfa__result__text">DFA Applcaition</p>
          <div className="dfa__result__wrapper">
            <div className="dfa__result">
              <p className="dfa__result__text__element">Set</p>
            </div>
            <div className="dfa__result">
              <p className="dfa__result__text__element">State</p>
            </div>
            <div className="dfa__result">
              <p className="dfa__result__text__element">Start State</p>
            </div>
            <div className="dfa__result">
              <p className="dfa__result__text__element">Final State</p>
            </div>
            <div className="dfa__result">
              <p className="dfa__result__text__element">Operator</p>
            </div>
            <div className="dfa__result">
              <p className="dfa__result__text__element">Target</p>
            </div>
          </div>
        </div>
        <div className="dfa__result__card__wrapper">
          <div className="dfa__result__card">
            <div className="dfa__result__card__header">
              <p className="dfa__result__text">DFA Diagram Result</p>
              {/* Image */}
            </div>
          </div>
          <div className="dfa__result__under__card">
            <p className="dfa__result__text__element">
              Outcome (Approved, Rejected)
            </p>
          </div>
        </div>
      </div>
      <div className="transaction__function__wrapper">
        <p className="transaction__function__text">Transaction Functions</p>
        
      </div>
    </div>
  );
};

export default DfaResult;
