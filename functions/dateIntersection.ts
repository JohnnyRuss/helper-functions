type CheckDateIntersectionT = (args: {
  dateRange: Date[];
  dateRangeToCompare: { start: Date | string; end: Date | string }[];
}) => boolean;

const checkDateIntersection: CheckDateIntersectionT = ({
  dateRange,
  dateRangeToCompare,
}) => {
  const [dateRangeStart, dateRangeEnd] = dateRange;

  const rangeStart = dateRangeStart
    ? new Date(dateRangeStart).getTime()
    : new Date().getTime();

  const rangeEnd = dateRangeEnd
    ? new Date(dateRangeEnd).getTime()
    : new Date().getTime();

  const intersecting = dateRangeToCompare
    .map(({ start, end }) => {
      const comparisonStart = new Date(start).getTime();
      const comparisonEnd = new Date(end).getTime();

      if (rangeStart <= comparisonStart && rangeEnd >= comparisonStart)
        return true; // comparison between range / intersecting
      else if (rangeStart <= comparisonEnd && rangeEnd >= comparisonEnd)
        return true; // range overlaps comparison / intersecting
      else if (rangeStart > comparisonStart && rangeEnd < comparisonEnd)
        return true; // range between comparison / intersecting
      else return false; // not intersecting
    })
    .every((availability) => availability === false);

  return intersecting;
};

export default checkDateIntersection;
