import { DateTime } from "luxon";

export function diffDates(firstDate, secondDate) {
  firstDate = DateTime.fromISO(firstDate)
  secondDate = DateTime.fromISO(secondDate)

  if (firstDate > secondDate)
    secondDate = [firstDate, firstDate = secondDate][0];

  return secondDate.diff(firstDate, ['year', 'months', 'days']).toObject();
}

export const diffToHtml = diff => `
  <span>
    ${diff.years ? 'лет ' + diff.years : ''}
    ${diff.months ? 'месяцев ' + diff.months : ''}
    ${diff.days ? 'дней ' + diff.days : ''}
  </span>

`;