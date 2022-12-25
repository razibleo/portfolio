const months = new Map<number, string>();
months.set(0, "January");
months.set(1, "February");
months.set(2, "March");
months.set(3, "April");
months.set(4, "May");
months.set(5, "June");
months.set(6, "July");
months.set(7, "August");
months.set(8, "September");
months.set(9, "October");
months.set(10, "November");
months.set(11, "December");

function monthYearFormat(date: Date): string {
  return `${months.get(date.getMonth())} ${date.getFullYear()}`;
}

const dataHelper = {
  monthYearFormat,
};

export default dataHelper;
