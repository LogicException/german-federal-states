# german federal states

This package contains types and const of all german federal states and capital cities. 

## How to use

### FederalStates

Provides an object of all federal states with language indexed (by ISO-639-1 language code) name. 
At the moment I've only added the german name of the federal state. Feel free to add more languages if needed.

```javascript
console.log(FederalStates.SN.de);
// prints: "Sachsen"
```

### CapitalCities

Provides an object of all capital city of each federal state. City names are alsow language indexed 
(by ISO-639-1 language code). 

```javascript
console.log(CapitalCities.SN.de);
// prints: "Dresden"
```
