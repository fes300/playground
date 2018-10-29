import { Newtype, iso } from "newtype-ts";

interface Logger extends Newtype<"Logger", string> {}
export const loggerIso = iso<Logger>();

export interface Writer<A> extends Newtype<"Writer", [A, Logger]> {}
const stringWriterIso = iso<Writer<string>>();
const stringArrayWriterIso = iso<Writer<string[]>>();

export function uppercaseString(a: string): Writer<string> {
  return stringWriterIso.wrap([
    a.toUpperCase(),
    loggerIso.wrap(`string ${a} was uppercased`)
  ]);
}

export function toWords(a: string): Writer<string[]> {
  return stringArrayWriterIso.wrap([
    a.split(" "),
    loggerIso.wrap(`string ${a} was separated into words`)
  ]);
}

export function whatever<A>(a: A): Writer<A> {
  return iso<Writer<A>>().wrap([
    a,
    loggerIso.wrap("I just did whatever I want!")
  ]);
}

export function composeLoggerFunctions<A, B, C>(
  a: (a: A) => Writer<B>,
  b: (b: B) => Writer<C>
): (a: A) => Writer<C> {
  const newIso = iso<Writer<C>>();

  return function(c: A): Writer<C> {
    const resA: Writer<B> = a(c);
    const resB: Writer<C> = b(resA[0]);
    return newIso.wrap([resB[0], loggerIso.wrap(resA[1] + resB[1])]);
  };
}

const uppercasedWords = composeLoggerFunctions(uppercaseString, toWords);

const result = uppercasedWords("hello world");

console.log(result);
