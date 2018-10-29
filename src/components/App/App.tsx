import * as React from "react";
import { Option, some } from "fp-ts/lib/Option";
import { parseGS1Barcode, groupSeparator } from "App/stuff";

const plain = "011234567123456717123486240123456789012345678901234567890"; // p: 12345671234567123456 E: 123486 l: 123456789012345678901234567890
const withShorterProductIdAndLot = "011234567123456717123486240123%"; // p: 12345671234567 E: 123486 l: 240123
const withShorterProductIdAndLotAnd8005 =
  "8005123456011234567123456717123486240123%"; // 8005: 123456 p: 12345671234567 E: 123486 l: 123
const withAI8005InBetween = `240123${groupSeparator}0112345671234567800512345617123486`;
const wrong = "43";

class App extends React.Component {
  componentDidMount() {
    // console.log(1, parseGS1Barcode(plain));
    // console.log(2, parseGS1Barcode(withShorterProductIdAndLot));
    // console.log(3, parseGS1Barcode(withShorterProductIdAndLotAnd8005));
    console.log(4, parseGS1Barcode(withAI8005InBetween));
    // console.log(5, parseGS1Barcode(wrong));
  }

  render() {
    return null;
  }
}

export default App;
