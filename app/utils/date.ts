const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2022-07-01" -> "Jul 2022" */
export function formatMonthYear(date: string | Date) {
  const d = typeof date === "string" ? new Date(date) : date;
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** Whole months between two dates, always positive. */
export function monthsBetween(start: string | Date, end: string | Date) {
  const a = typeof start === "string" ? new Date(start) : start;
  const b = typeof end === "string" ? new Date(end) : end;
  return Math.abs(
    (b.getUTCFullYear() - a.getUTCFullYear()) * 12 + (b.getUTCMonth() - a.getUTCMonth()),
  );
}

/** "3 years and 2 months" */
export function durationForHumans(start: string | Date, end: string | Date) {
  const total = monthsBetween(start, end);
  const years = Math.floor(total / 12);
  const months = total % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
  return parts.join(" and ") || "less than a month";
}

/** "6.5y" — compact, for chart labels. */
export function durationCompact(start: string | Date, end: string | Date) {
  const years = monthsBetween(start, end) / 12;
  return `${years >= 10 ? Math.round(years) : years.toFixed(1)}y`;
}

/** Hostname without the leading "www.". */
export function hostname(url: string) {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}
