interface GenerateLowerCaseDataArgsT {
  data: Object;
  excludeFields?: string[];
}

type GenerateLowerCaseDataT = (
  args: GenerateLowerCaseDataArgsT
) => Object | null;

const generateLowerCaseData: GenerateLowerCaseDataT = ({
  data,
  excludeFields,
}) => {
  if (!Object.values(data)[0]) return null;

  const temp = loopData({ data, excludeFields });

  return temp;
};

function loopData({ data, excludeFields }: GenerateLowerCaseDataArgsT): Object {
  const shallow = { ...data };
  const temp = {};

  for (const [key, value] of Object.entries(shallow)) {
    if (excludeFields && excludeFields.includes(key)) temp[key] = value;
    else temp[key] = checkValueTypeAndConvertToLower({ value, excludeFields });
  }

  return temp;
}

function checkValueTypeAndConvertToLower({
  value,
  excludeFields,
}: {
  value: string | Object | Array<any>;
  excludeFields?: string[];
}): string | Object | Array<any> {
  if (typeof value === "string") return convertToLowerCase(value);
  else if (Array.isArray(value))
    return convertArrayType({ data: value, excludeFields });
  else if (typeof value === "object")
    return loopData({ data: value, excludeFields });
  else return value;
}

function convertArrayType({
  data,
  excludeFields,
}: {
  data: Array<any>;
  excludeFields?: string[];
}) {
  return [...data].map((value) =>
    checkValueTypeAndConvertToLower({ value, excludeFields })
  );
}

function convertToLowerCase(value: string): string {
  return value.toLowerCase();
}
