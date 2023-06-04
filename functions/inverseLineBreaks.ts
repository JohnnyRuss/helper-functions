export default function inverseLineBreaks(str: string): string {
  const reg = /<\/br>/g;
  const match = reg.exec(str);

  if (match) return str.replaceAll(reg, "\r\n");
  else return str;
}
