import {FederalState} from "./federalStates";
import {LanguageIndexedString} from "./languageIndexedString";

type CapitalCities = {
    [Key in FederalState]: LanguageIndexedString
}

export const CapitalCities: CapitalCities = {
    "BB": {"de": "Potsdam"},
    "BE": {"de": "Berlin"},
    "BW": {"de": "Stuttgart"},
    "BY": {"de": "München"},
    "HB": {"de": "Bremen"},
    "HE": {"de": "Wiesbaden"},
    "HH": {"de": "Hamburg"},
    "MV": {"de": "Schwerin"},
    "NI": {"de": "Hannover"},
    "NW": {"de": "Düsseldorf"},
    "RP": {"de": "Mainz"},
    "SH": {"de": "Kiel"},
    "SL": {"de": "Saarbrücken"},
    "SN": {"de": "Dresden"},
    "ST": {"de": "Magdeburg"},
    "TH": {"de": "Erfurt"},
};