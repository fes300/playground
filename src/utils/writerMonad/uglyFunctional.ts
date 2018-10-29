import { Newtype, iso } from "newtype-ts";

interface Logger extends Newtype<"Logger", string> {}
const loggerIso = iso<Logger>();

function functionalUppercaseString(a: string, l: Logger): [string, Logger] {
  return [a.toUpperCase(), loggerIso.wrap(`${l} string ${a} was uppercased`)];
}

function functionalToWords(a: string, l: Logger): [string[], Logger] {
  return [
    a.split(" "),
    loggerIso.wrap(`${l} string ${a} was separated into words`)
  ];
}

function functionalUppercasedWords(s: string, l: Logger): [string[], Logger] {
  const [uppercasedString, l2] = functionalUppercaseString(s, l);
  return functionalToWords(uppercasedString, l2);
}

const result = functionalUppercasedWords("hello world", loggerIso.wrap(""));

console.log(result);
