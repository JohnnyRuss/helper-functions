interface ConfigsT {
  shortNumeric: Intl.DateTimeFormatOptions;
  verbal: Intl.DateTimeFormatOptions;
  verbalWithHours: Intl.DateTimeFormatOptions;
}

type FormatDateArgsT = (args: {
  dateToFormat: Date | string;
  config: "shortNumeric" | "verbal" | "verbalWithHours";
}) => string | null;

const configs: ConfigsT = {
  shortNumeric: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  },
  verbal: {
    month: "short",
    year: "numeric",
    day: "numeric",
  },
  verbalWithHours: {
    month: "short",
    year: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  },
};

const formatDate: FormatDateArgsT = ({ config, dateToFormat }) => {
  if (!dateToFormat) return null;

  const date = new Date(dateToFormat);

  const formattedDate = new Intl.DateTimeFormat(
    "en-us",
    configs[config as keyof typeof configs]
  )?.format(date);

  return formattedDate.split("/").join("-");
};

export default formatDate;
