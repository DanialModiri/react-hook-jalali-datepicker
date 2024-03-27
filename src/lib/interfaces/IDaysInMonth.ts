import { IDays } from "./IDay";

export interface IDaysInMonth {
  days: IDays[];
  monthName: string;
  month: number;
  today?: string;
  year: number;
  monthNameJalali: string;
}
