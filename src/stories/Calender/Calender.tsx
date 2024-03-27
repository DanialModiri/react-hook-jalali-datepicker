import React from "react";
import useCalendar from "../../lib/hooks/useCalendar";
import "./assets/Calender.scss";
import classnames from "classnames";

function Calender() {
  const { daysInMonth, nextMonth, previusMonth } = useCalendar({});
  return (
    <div className="calender">
      <div onClick={previusMonth} className="previus-month-button">
        {'<'}
      </div>
      <div className="month">{daysInMonth.monthNameJalali}</div>
      <div onClick={nextMonth} className="previus-month-button">
        {'>'}
      </div>
      <div className="days">
        {daysInMonth.days.map((item) => (
          <div
            key={item.enDate}
            className={classnames("day", {
              "is-to-day": item.isToDay,
              "is-friday": item.isFriday,
            })}
          >
            {item.day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calender;
