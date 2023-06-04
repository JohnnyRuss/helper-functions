type CalcDays = (args: {
  startDate: string | Date;
  endDate: string | Date;
}) => number;

const calcDays: CalcDays = ({ startDate, endDate }) => {
  const msPerDay = 1000 * 60 * 60 * 24;

  const start = startDate instanceof Date ? startDate : new Date(startDate);
  const end = endDate instanceof Date ? endDate : new Date(endDate);

  const timeDiff = Math.abs(
    new Date(end).getTime() - new Date(start).getTime()
  );

  const daysDiff = Math.ceil(timeDiff / msPerDay);

  return daysDiff;
};

export default calcDays;
