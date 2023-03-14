const str = "One Three 3 two 2 three 3.5 Two 2.6 cat, Jumps to the table.";

// Match Word
const matchWordReg = /two/;
const matchWordRegWithCamelCase = /Two/;
const matchWordRegInCaseSens = /two/i;
const matchWordRegInCaseSensGlobal = /two/gi;
str.match(matchWordReg); // two
str.match(matchWordRegWithCamelCase); // Two
str.match(matchWordRegInCaseSens); // two
str.match(matchWordRegInCaseSensGlobal); // [two,Two]

// Match Couple Of Word
const matMchWordReg = /three|two/; // two -> returns first match in str
const matMchWordRegGlobal = /three|two/g; // [two,three] -> returns first match in str
const matchMWordRegInCaseSens = /two|Three/i; // Three -> returns first match in str case sensitive
const matchMWordRegInCaseSensBr = /[two|Three]/i; // "O" -> return first matched letter in str -- so [] defines kind of range
const matchMWordRegInCaseSensGlobal = /two|three/gi; // [ 'Three', 'two', 'three', 'Two' ]
str.match(matMchWordReg);
str.match(matchMWordRegInCaseSens);
str.match(matchMWordRegInCaseSensBr);
str.match(matchMWordRegInCaseSensGlobal);

// Periods -> these ones even returns first match without /g flag !
const matchWithPeriod = /tw./; // two -> returns "tw" and one more letter after "tw". So period defines following or bygone(letters before "tw") letters count. So reg matches as many  extra lettesr as many periods count is in out regex
const matchWithTwoPeriod = /tw../; // "two " -> returns "tw" and extra "o "
const matchWithPeriodAndAsterisk = /tw.*/; // returns whole str after "tw"
const matchWithPeriodAndAsteriskBothSide = /.*tw.*/; // returns whole str
const matchWithPeriodAndBrackets = /tw.{2,5}/; // two thr -> min 2 and max 5 letter after "tw". string must contain min 2 letter after "tw" otherwise regex fails.
const matchWithPeriodAndBracketsBothSide = /.{2,5}tw.{2,5}/; // hree two thr -> returns min 2 and max 5 leeter before "tw" and min 2 and max 5 letter after "tw"
str.match(matchWithPeriod);
str.match(matchWithTwoPeriod);
str.match(matchWithPeriodAndAsterisk);
str.match(matchWithPeriodAndBrackets);
str.match(matchWithPeriodAndBracketsBothSide);

const matchLettersRange = /[a-z]/i; // returns first letter
const matchLettersRangeGlobal = /[a-z]/gi; // returns all of the latin letters
const matchNumbersRange = /[0-9]/; // returns first number
const matchNumbersRangeGlobal = /[0-9]/g; // returns all of the numbers, integers are returned as individual numbers
str.match(matchLettersRange);
str.match(matchLettersRangeGlobal);
str.match(matchNumbersRange);
str.match(matchNumbersRangeGlobal);

const notMatchValues = /[^a-z0-9]/gi; // returns everything beside the latin letters from a to z and numbers from 0 to 9
const matchOneOrMoreValues = /e+/gi; // returns "e" matched one or more time
const matchOneOrMoreValuesAsterisk = /e*/gi; // returns "e" matched zero or more time
const matchDigits = /\d/gi; // returns digits
const matchNoDigits = /\D/gi; // returns not a numbers
const matchSpace = /\s/gi; // returns space
const matchNoSpace = /\S/gi; // returns not a space


// (?=subexp)         look-ahead
// (?!subexp)         negative look-ahead
// (?<=subexp)        look-behind
// (?<!subexp)        negative look-behind

// const results = { a, b, c, d };
// console.log(results);