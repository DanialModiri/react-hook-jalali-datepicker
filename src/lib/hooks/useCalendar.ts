import moment, { Moment } from "jalali-moment";
import { useCallback, useMemo, useState } from "react";
import { getDaysInMonth } from "../utils/daysInMonth";

export type DatepickerProps = {
  currentDate?: Moment | string;
  defaultDate?: Moment | string;
  offset?: string;
}

function useCalendar({
  currentDate = moment(),
  offset,
  defaultDate = moment()
}: DatepickerProps) {
  const [calenderDate, setCalenderDate] = useState<Moment>(() => {
    const initialStateValue = typeof defaultDate === 'string' ? moment(defaultDate) : defaultDate;
    if (offset) {
      initialStateValue.utcOffset(offset);
    }
    return initialStateValue;
  });

  const nextMonth = useCallback(() => {
    setCalenderDate(prev => prev.clone().add(1, 'months'));
  }, []);

  const previusMonth = useCallback(() => {
    setCalenderDate(prev => prev.clone().subtract(1, 'months'));
  }, []);

  const goToMonth = useCallback((month: number) => {
    setCalenderDate(prev => prev.clone().month(month));
  }, []);

  const daysInMonth = useMemo(() => getDaysInMonth(calenderDate, moment(currentDate)), [calenderDate, currentDate]);

  return {
    previusMonth,
    nextMonth,
    goToMonth,
    daysInMonth
  };
}

export default useCalendar;
