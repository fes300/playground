let logger: string = "";

function uppercaseString(a: string): string {
  logger = logger += `string ${a} was uppercased`;
  return a.toUpperCase();
}

function toWords(a: string): string[] {
  logger = logger += `string ${a} was separated into words`;
  return a.split(" ");
}

function uppercasedWords(s: string): string[] {
  const us = uppercaseString(s);
  return toWords(us);
}

const result = uppercasedWords("hello world");

console.log(result, logger);
