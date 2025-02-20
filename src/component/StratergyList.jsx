import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useMemo, useState } from "react";
import NoData from "./NoData";
import { dateArray } from "../config/data";

function StratergyList({ data, selectedDate, setSelectedDate }) {
  const [open, setOpen] = useState(false);

  const filterStrategyCount = (data) => {
    const strategyCount = data.reduce((acc, strategy) => {
      if (acc[strategy]) {
        acc[strategy] = {
          name: strategy,
          count: acc[strategy]?.count + 1,
        };
      } else {
        acc[strategy] = {
          name: strategy,
          count: 1,
        };
      }
      return acc;
    }, {});
    return Object.values(strategyCount);
  };

  const strategy = useMemo(() => {
    const filterStrategy = data?.[selectedDate] || null;
    if (!filterStrategy) return [];
    return filterStrategyCount(filterStrategy);
  }, [data, selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.textContent);
    setOpen(!open);
  };

  return (
    <>
      <div className="date-picker-container">
        <button className="date-picker-dropdown" onClick={() => setOpen(!open)}>
          <span className="bold-text">{selectedDate}</span>
          {open ? (
            <ChevronUp size={24} className="arrow-up" color="blue" />
          ) : (
            <ChevronDown size={24} className="arrow-down" color="blue" />
          )}
        </button>
        {open && (
          <div className="date-pickers-list">
            {dateArray.map((date) => (
              <button
                className="date-picker-dropdown"
                key={date}
                onClick={handleDateChange}
              >
                <span className="bold-text">{date}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      {strategy.length > 0 ? (
        <div className="stratergy-container">
          {strategy.length > 0 &&
            strategy.map((strategy) => (
              <div className="stratergy-content" key={strategy.name}>
                <span className="bold-text">{strategy.name}</span>
                <div className="strategy-text-container">
                  <span className="dot"></span>
                  <span className="strategy-text">
                    {strategy.count}
                    &nbsp;
                    {strategy.count <= 1 ? "Strategy" : "Strategies"}
                  </span>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <NoData />
      )}
    </>
  );
}

export default StratergyList;
