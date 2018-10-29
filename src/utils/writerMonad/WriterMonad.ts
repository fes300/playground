import {
  composeLoggerFunctions,
  Writer,
  uppercaseString,
  toWords,
  loggerIso
} from "./niceFunctional";
import { Monoid } from "fp-ts/lib/Monoid";
import { iso } from "newtype-ts";

function unit<A>(a: A): Writer<A> {
  return iso<Writer<A>>().wrap([a, loggerIso.wrap("")]);
}

export const WriterMonad: Monoid<(a: any) => Writer<any>> = {
  empty: unit,
  concat: composeLoggerFunctions
};

const result = WriterMonad.concat(uppercaseString, toWords)("hello world");
/* it is equivalent to:

WriterMonad("hello World")
    .chain(uppercaseString)
    .chain(toWords)
*/

console.log(result);

// type HKT<A> = (a: A) => Writer<A>

// export const WriterMonad: Monoid<HKT<any>> = {
//   empty: unit,
//   concat: composeLoggerFunctions
// };
