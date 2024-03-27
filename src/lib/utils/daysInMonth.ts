import moment, { Moment } from "jalali-moment";
import { IDaysInMonth } from "../interfaces/IDaysInMonth";
import { IDays } from "../interfaces/IDay";

const checkDateMonth = (date: Moment, current: Moment) =>
  current.month() < date.month();
const checkCurrentMonth = (date: Moment) =>
  moment().format("YYYY/MM") === date.format("YYYY/MM");

export const getDaysInMonth = (
  date: Moment,
  currentDate: Moment = moment()
): IDaysInMonth => {
  const days: IDays[] = [];
  let clonedDate = date.clone();
  const monthName = `${clonedDate.format("YYYY")} ${clonedDate
    .locale("en")
    .format("MMMM")}`;

    const monthNameJalali = `${clonedDate.format("jYYYY")} ${clonedDate
      .locale("fa")
      .format("jMMMM")}`;

  const month = Number(date.clone().locale("fa").format("M"));

  const year = Number(date.clone().locale("fa").format("jYYYY"));

  const firstDayOfWeek = date.clone().startOf("jMonth");
  const lastDayOfWeek = date.clone().endOf("jMonth");
  const today = checkCurrentMonth(date) ? { today: date.format("jDD") } : null;

  firstDayOfWeek.subtract(firstDayOfWeek.jDay() % 7, "days");

  while (firstDayOfWeek.isBefore(lastDayOfWeek)) {
    days.push({
      day: firstDayOfWeek.clone().format("jD"),
      utc: new Date(firstDayOfWeek.clone().format("YYYY/M/DD")).toUTCString(),
      enDate: firstDayOfWeek.clone().format("YYYY-MM-DD"),
      faDate: firstDayOfWeek.clone().format("jYYYY/jMM/jDD"),
      disable: checkDateMonth(date, firstDayOfWeek),
      isToDay: false,
      isFriday: firstDayOfWeek.format("dddd") === "Friday",
    });
    const toDayDate = currentDate.format("YYYY-MM-DD");
    const toDayIndex = days.findIndex((day) => day.enDate === toDayDate);
    if (toDayIndex > -1) days[toDayIndex].isToDay = true;
    firstDayOfWeek.add(1, "days");
  }
  return { monthName, monthNameJalali, month, days, year, ...today };
};
