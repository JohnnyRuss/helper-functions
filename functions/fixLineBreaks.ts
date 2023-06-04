export default function fixLineBreaks(str: string): string {
  const reg = /\r|\n/g;
  const match = reg.exec(str);

  if (match) return str.replaceAll(reg, "</br>");
  else return str;
}
