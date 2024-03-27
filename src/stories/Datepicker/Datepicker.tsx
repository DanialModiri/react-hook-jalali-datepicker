import moment, { Moment } from "moment";
import React, { useMemo } from "react";
import useCalendar from "../../lib/hooks/useCalendar";

type Props = {
  value: string | Moment;
};

function Datepicker({ value }: Props) {
  const { daysInMonth } = useCalendar({ });
  const momentValue = useMemo(() => moment(value), [value]);
  return (
    <div>
      {daysInMonth.days.map((item) => (
        <div
          key={item.enDate}
          style={{
            color:
              item.enDate === momentValue.format("YYYY-MM-DD")
                ? "red"
                : undefined,
          }}
        >
          {item.day}
        </div>
      ))}
    </div>
  );
}

export default Datepicker;
