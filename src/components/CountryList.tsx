import React from "react";
import CountryItem from "./CountryItem";
import { ICountry } from "../types";
interface ICountryList {
  countries: ICountry[];
}

const CountryList = ({ countries }: ICountryList) => {
  return (
    <ul className="CountryList list-group ">
      {countries.map((country) => (
        <CountryItem key={country.name} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;