function calcAge(date = new Date("02-28-1996")): number {
  return Math.abs(new Date(Date.now() - date.getTime()).getFullYear() - 1970);
}
