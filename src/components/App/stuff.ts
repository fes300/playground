import { Option, none, some } from "fp-ts/lib/Option";
import { findFirst } from "fp-ts/lib/Array";

type AI = {
  id: string;
  description: string;
  AImaxLenght: number;
  variable: boolean;
};

const possibleAIs: Array<AI> = [
  {
    id: "00",
    description: "SerialShippingContainerCode",
    AImaxLenght: 18,
    variable: false
  },
  {
    id: "01",
    description: "EAN-NumberOfTradingUnit",
    AImaxLenght: 14,
    variable: false
  },
  {
    id: "02",
    description: "EAN-NumberOfTheWaresInTheShippingUnit",
    AImaxLenght: 14,
    variable: false
  },
  { id: "10", description: "Charge_Number", AImaxLenght: 20, variable: true },
  {
    id: "11",
    description: "ProducerDate_JJMMDD",
    AImaxLenght: 6,
    variable: false
  },
  { id: "12", description: "DueDate_JJMMDD", AImaxLenght: 6, variable: false },
  {
    id: "13",
    description: "PackingDate_JJMMDD",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "15",
    description: "MinimumDurabilityDate_JJMMDD",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "17",
    description: "ExpiryDate_JJMMDD",
    AImaxLenght: 6,
    variable: false
  },
  { id: "20", description: "ProductModel", AImaxLenght: 2, variable: false },
  { id: "21", description: "SerialNumber", AImaxLenght: 20, variable: true },
  { id: "22", description: "HIBCCNumber", AImaxLenght: 29, variable: false },
  {
    id: "240",
    description: "PruductIdentificationOfProducer",
    AImaxLenght: 30,
    variable: true
  },
  {
    id: "241",
    description: "CustomerPartsNumber",
    AImaxLenght: 30,
    variable: true
  },
  {
    id: "250",
    description: "SerialNumberOfAIntegratedModule",
    AImaxLenght: 30,
    variable: true
  },
  {
    id: "251",
    description: "ReferenceToTheBasisUnit",
    AImaxLenght: 30,
    variable: true
  },
  {
    id: "252",
    description: "GlobalIdentifierSerialisedForTrade",
    AImaxLenght: 2,
    variable: false
  },
  { id: "30", description: "AmountInParts", AImaxLenght: 8, variable: true },
  {
    id: "310d",
    description: "NetWeight_Kilogram",
    AImaxLenght: 6,
    variable: false
  },
  { id: "311d", description: "Length_Meter", AImaxLenght: 6, variable: false },
  { id: "312d", description: "Width_Meter", AImaxLenght: 6, variable: false },
  { id: "313d", description: "Heigth_Meter", AImaxLenght: 6, variable: false },
  {
    id: "314d",
    description: "Surface_SquareMeter",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "315d",
    description: "NetVolume_Liters",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "316d",
    description: "NetVolume_CubicMeters",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "320d",
    description: "NetWeight_Pounds",
    AImaxLenght: 6,
    variable: false
  },
  { id: "321d", description: "Length_Inches", AImaxLenght: 6, variable: false },
  { id: "322d", description: "Length_Feet", AImaxLenght: 6, variable: false },
  { id: "323d", description: "Length_Yards", AImaxLenght: 6, variable: false },
  { id: "324d", description: "Width_Inches", AImaxLenght: 6, variable: false },
  { id: "325d", description: "Width_Feed", AImaxLenght: 6, variable: false },
  { id: "326d", description: "Width_Yards", AImaxLenght: 6, variable: false },
  { id: "327d", description: "Heigth_Inches", AImaxLenght: 6, variable: false },
  { id: "328d", description: "Heigth_Feed", AImaxLenght: 6, variable: false },
  { id: "329d", description: "Heigth_Yards", AImaxLenght: 6, variable: false },
  {
    id: "330d",
    description: "GrossWeight_Kilogram",
    AImaxLenght: 6,
    variable: false
  },
  { id: "331d", description: "Length_Meter", AImaxLenght: 6, variable: false },
  { id: "332d", description: "Width_Meter", AImaxLenght: 6, variable: false },
  { id: "333d", description: "Heigth_Meter", AImaxLenght: 6, variable: false },
  {
    id: "334d",
    description: "Surface_SquareMeter",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "335d",
    description: "GrossVolume_Liters",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "336d",
    description: "GrossVolume_CubicMeters",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "337d",
    description: "KilogramPerSquareMeter",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "340d",
    description: "GrossWeight_Pounds",
    AImaxLenght: 6,
    variable: false
  },
  { id: "341d", description: "Length_Inches", AImaxLenght: 6, variable: false },
  { id: "342d", description: "Length_Feet", AImaxLenght: 6, variable: false },
  { id: "343d", description: "Length_Yards", AImaxLenght: 6, variable: false },
  { id: "344d", description: "Width_Inches", AImaxLenght: 6, variable: false },
  { id: "345d", description: "Width_Feed", AImaxLenght: 6, variable: false },
  { id: "346d", description: "Width_Yards", AImaxLenght: 6, variable: false },
  { id: "347d", description: "Heigth_Inches", AImaxLenght: 6, variable: false },
  { id: "348d", description: "Heigth_Feed", AImaxLenght: 6, variable: false },
  { id: "349d", description: "Heigth_Yards", AImaxLenght: 6, variable: false },
  {
    id: "350d",
    description: "Surface_SquareInches",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "351d",
    description: "Surface_SquareFeet",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "352d",
    description: "Surface_SquareYards",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "353d",
    description: "Surface_SquareInches",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "354d",
    description: "Surface_SquareFeed",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "355d",
    description: "Surface_SquareYards",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "356d",
    description: "NetWeight_TroyOunces",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "357d",
    description: "NetVolume_Ounces",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "360d",
    description: "NetVolume_Quarts",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "361d",
    description: "NetVolume_Gallonen",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "362d",
    description: "GrossVolume_Quarts",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "363d",
    description: "GrossVolume_Gallonen",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "364d",
    description: "NetVolume_CubicInches",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "365d",
    description: "NetVolume_CubicFeet",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "366d",
    description: "NetVolume_CubicYards",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "367d",
    description: "GrossVolume_CubicInches",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "368d",
    description: "GrossVolume_CubicFeet",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "369d",
    description: "GrossVolume_CubicYards",
    AImaxLenght: 6,
    variable: false
  },
  { id: "37", description: "QuantityInParts", AImaxLenght: 8, variable: true },
  {
    id: "390d",
    description: "AmountDue_DefinedValutaBand",
    AImaxLenght: 15,
    variable: true
  },
  {
    id: "391d",
    description: "AmountDue_WithISOValutaCode",
    AImaxLenght: 18,
    variable: true
  },
  {
    id: "392d",
    description: "BePayingAmount_DefinedValutaBand",
    AImaxLenght: 15,
    variable: true
  },
  {
    id: "393d",
    description: "BePayingAmount_WithISOValutaCode",
    AImaxLenght: 18,
    variable: true
  },
  {
    id: "400",
    description: "JobNumberOfGoodsRecipient",
    AImaxLenght: 30,
    variable: true
  },
  { id: "401", description: "ShippingNumber", AImaxLenght: 30, variable: true },
  {
    id: "402",
    description: "DeliveryNumber",
    AImaxLenght: 17,
    variable: false
  },
  { id: "403", description: "RoutingCode", AImaxLenght: 30, variable: true },
  {
    id: "410",
    description: "EAN_UCC_GlobalLocationNumber(GLN)_GoodsRecipient",
    AImaxLenght: 13,
    variable: false
  },
  {
    id: "411",
    description: "EAN_UCC_GlobalLocationNumber(GLN)_InvoiceRecipient",
    AImaxLenght: 13,
    variable: false
  },
  {
    id: "412",
    description: "EAN_UCC_GlobalLocationNumber(GLN)_Distributor",
    AImaxLenght: 13,
    variable: false
  },
  {
    id: "413",
    description: "EAN_UCC_GlobalLocationNumber(GLN)_FinalRecipient",
    AImaxLenght: 13,
    variable: false
  },
  {
    id: "414",
    description: "EAN_UCC_GlobalLocationNumber(GLN)_PhysicalLocation",
    AImaxLenght: 13,
    variable: false
  },
  {
    id: "415",
    description: "EAN_UCC_GlobalLocationNumber(GLN)_ToBilligParticipant",
    AImaxLenght: 13,
    variable: false
  },
  {
    id: "420",
    description: "ZipCodeOfRecipient_withoutCountryCode",
    AImaxLenght: 20,
    variable: true
  },
  {
    id: "421",
    description: "ZipCodeOfRecipient_withCountryCode",
    AImaxLenght: 12,
    variable: true
  },
  {
    id: "422",
    description: "BasisCountryOfTheWares_ISO3166Format",
    AImaxLenght: 3,
    variable: false
  },
  {
    id: "7001",
    description: "Nato Stock Number",
    AImaxLenght: 13,
    variable: false
  },
  {
    id: "8001",
    description: "RolesProducts",
    AImaxLenght: 14,
    variable: false
  },
  {
    id: "8002",
    description: "SerialNumberForMobilePhones",
    AImaxLenght: 20,
    variable: true
  },
  {
    id: "8003",
    description: "GlobalReturnableAssetIdentifier",
    AImaxLenght: 34,
    variable: true
  },
  {
    id: "8004",
    description: "GlobalIndividualAssetIdentifier",
    AImaxLenght: 30,
    variable: true
  },
  {
    id: "8005",
    description: "SalesPricePerUnit",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "8006",
    description: "IdentifikationOfAProductComponent",
    AImaxLenght: 18,
    variable: false
  },
  { id: "8007", description: "IBAN", AImaxLenght: 30, variable: true },
  {
    id: "8008",
    description: "DataAndTimeOfManufacturing",
    AImaxLenght: 12,
    variable: true
  },
  {
    id: "8018",
    description: "GlobalServiceRelationNumber",
    AImaxLenght: 18,
    variable: false
  },
  {
    id: "8020",
    description: "NumberBillCoverNumber",
    AImaxLenght: 25,
    variable: false
  },
  {
    id: "8100",
    description: "CouponExtendedCode_NSC_offerCcode",
    AImaxLenght: 10,
    variable: false
  },
  {
    id: "8101",
    description: "CouponExtendedCode_NSC_offerCcode_EndOfOfferCode",
    AImaxLenght: 14,
    variable: false
  },
  {
    id: "8102",
    description: "CouponExtendedCode_NSC",
    AImaxLenght: 6,
    variable: false
  },
  {
    id: "90",
    description: "InformationForBilateralCoordinatedApplications",
    AImaxLenght: 30,
    variable: true
  }
];

export const groupSeparator = String.fromCharCode(29);

export function parseGS1Barcode(
  barcode: string,
  results: Array<{ id: string; value: string }> = []
): Array<{ id: string; value: string }> {
  const AI = getFirstAi(barcode);

  if (AI.isNone()) {
    return results;
  }

  const { value, strippedBarcode } = getAiValue(barcode, AI.value);

  return parseGS1Barcode(strippedBarcode, [
    ...results,
    { id: AI.value.id, value }
  ]);
}

function getFirstAi(barcode: string, aiLenght = 2): Option<AI> {
  if (aiLenght > 4) {
    return none;
  }

  const ai = findFirst(
    possibleAIs,
    ai => ai.id === barcode.substr(0, aiLenght)
  );

  return ai.isSome() ? ai : getFirstAi(barcode, aiLenght + 1);
}

function getAiValue(
  barcode: string,
  AI: AI
): { value: string; strippedBarcode: string } {
  if (AI.variable) {
    const index = barcode.indexOf(groupSeparator);

    const value = barcode.substr(
      AI.id.length,
      index > -1 ? index - AI.id.length : AI.AImaxLenght
    );

    return {
      value,
      strippedBarcode:
        index > -1
          ? barcode.substr(AI.id.length + value.length + 1) // +1 to strip the separator (if present)
          : barcode.substr(AI.id.length + value.length)
    };
  }

  return {
    value: barcode.substr(AI.id.length, AI.AImaxLenght),
    strippedBarcode: barcode.substr(AI.id.length + AI.AImaxLenght)
  };
}
