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

export const PseudoWriterMonad: Monoid<(a: any) => Writer<any>> = {
  empty: unit,
  concat: composeLoggerFunctions
};

const result = PseudoWriterMonad.concat(uppercaseString, toWords)(
  "hello world"
);
/* it is equivalent to:

PseudoWriterMonad("hello World")
    .chain(uppercaseString)
    .chain(toWords)
*/

console.log(result);

// type HKT<A> = (a: A) => Writer<A>

// export const LessPseudoWriterMonad: Monoid<HKT<any>> = {
//   empty: unit,
//   concat: composeLoggerFunctions
// };
