import type { Country } from "../types";
import CountryCard from "./CountryCard";

interface Props {
  countries: Country[];
  setCountryBookmark: (countryFlag: Country["flag"]) => void;
}

const CountryComparison = ({ countries, setCountryBookmark }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-4 p-4">
      {countries.map((country) => (
        <CountryCard vertical country={country} isBookmarked={true} setCountryBookmark={() => setCountryBookmark(country.flag)} />
      ))}
    </div>
  );
};

export default CountryComparison;
