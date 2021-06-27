import {LanguageIndexedString} from "./languageIndexedString";

export type FederalState =
    "BB" |
    "BE" |
    "BW" |
    "BY" |
    "HB" |
    "HE" |
    "HH" |
    "MV" |
    "NI" |
    "NW" |
    "RP" |
    "SH" |
    "SL" |
    "SN" |
    "ST" |
    "TH"

type FederalStates = {
    [Key in FederalState]: LanguageIndexedString
}

export const FederalStates: FederalStates = {
    "BB": {"de": "Brandenburg"},
    "BE": {"de": "Berlin"},
    "BW": {"de": "Baden-Württemberg"},
    "BY": {"de": "Bayern"},
    "HB": {"de": "Bremen"},
    "HE": {"de": "Hessen"},
    "HH": {"de": "Hamburg"},
    "MV": {"de": "Mecklenburg-Vorpommern"},
    "NI": {"de": "Niedersachsen"},
    "NW": {"de": "Nordrhein-Westfalen"},
    "RP": {"de": "Rheinland-Pfalz"},
    "SH": {"de": "Schleswig-Holstein"},
    "SL": {"de": "Saarland"},
    "SN": {"de": "Sachsen"},
    "ST": {"de": "Sachsen-Anhalt"},
    "TH": {"de": "Thüringen"}
};