import type { Country } from "../types";

interface Props {
  country: Country;
}

const CountryCard = ({ country }: Props) => {
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium rounded-xl">
      <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{country.name.official}</h5>
      <p>{country.flag}</p>
      <h6>languages:</h6>
      {Object.values(country.languages).map((language) => (
        <p key={language}>{language}</p>
      ))}
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
    </div>
  );
};

export default CountryCard;
