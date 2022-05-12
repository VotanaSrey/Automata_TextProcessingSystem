import React from "react";
import "./history.css";
import { historyItems } from "../../components/common/constants";
export const History = () => {
  return (
    <div>
      <p className="header__text">DFA History Records</p>
      <div className="history__table">
        <div className="history__table__header">
          <div className="history__table__header__item1">
            <p className="history__table__header__item1__text">No</p>
          </div>
          {historyItems.map((item) => {
            return (
              <div className="history__table__header__item2" key={item.id}>
                <p className="history__table__header__item1__text">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="history__table__body">
          <div className="history__table__body__item1">
            <p className="history__table__body__item1__text">1</p>
          </div>
        </div>
      </div>
    </div>
  );
};
