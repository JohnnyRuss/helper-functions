type CalcAgeT = (date: string | Date) => number;

const calcAge: CalcAgeT = (date) => {
  const dateToFormat = date instanceof Date ? date : new Date(date);

  return Math.abs(
    new Date(Date.now() - dateToFormat.getTime()).getFullYear() - 1970
  );
};

export default calcAge;
