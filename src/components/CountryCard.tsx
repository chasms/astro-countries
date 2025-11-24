import type { Country } from "../types";

interface Props {
  country: Country;
  setCountryBookmark: () => void;
  isBookmarked: boolean;
}

const CountryCard = ({ country, isBookmarked, setCountryBookmark }: Props) => {
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium rounded-xl">
      <button
        type="button"
        onClick={setCountryBookmark}
        className={`inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  inset-ring
          ${isBookmarked ? "bg-green-50 text-green-600 inset-ring-green-500/10" : "bg-gray-50 text-gray-600 inset-ring-gray-500/10"}
          `}
      >
        {isBookmarked ? "Bookmarked" : "Not Bookmarked"}
      </button>
      <div className="flex">
        <p className="size-12">{country.flag}</p>
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{country.name.official}</h5>
      </div>
      <h6>Languages:</h6>
      {Object.values(country.languages).map((language) => (
        <span className="inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  inset-ring" key={language}>
          {language}
        </span>
      ))}
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
    </div>
  );
};

export default CountryCard;
