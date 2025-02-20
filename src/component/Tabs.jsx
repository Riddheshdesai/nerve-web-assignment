import React, { useMemo, useState } from "react";
import StratergyList from "./StratergyList";
import { dateArray, strategyArray } from "../config/data";

const Tabs = () => {
  const strategyData = useMemo(() => strategyArray, [strategyArray]);
  const [activeTab, setActiveTab] = useState(strategyData[0]);
  const dateList = useMemo(() => dateArray, [dateArray]);
  const [selectedDate, setSelectedDate] = useState(dateList[0]);

  function handleDateChange(tab) {
    setActiveTab(tab);
    setSelectedDate(dateList[0]);
  }

  return (
    <>
      <div className="tabs">
        {strategyArray.map((tab) => (
          <button
            key={tab.View}
            className={`tab-btn ${activeTab.View === tab.View ? "active" : ""}`}
            onClick={() => handleDateChange(tab)}
          >
            {tab.View}
          </button>
        ))}
      </div>
      <StratergyList
        data={activeTab?.Value}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </>
  );
};

export default Tabs;
