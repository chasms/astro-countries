import type { Country } from "../types";
import BookmarkIcon from "./BookmarkIcon";

interface Props {
  country: Country;
  setCountryBookmark: () => void;
  isBookmarked: boolean;
  vertical?: boolean;
}

const CountryCard = ({ country, isBookmarked, setCountryBookmark, vertical = false }: Props) => {
  return (
    <div
      className={`w-full mx-auto flex flex-1 justify-between items-center gap-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 ${
        vertical ? "flex-col" : ""
      }`}
    >
      <div className="flex flex-wrap items-center flex-1 gap-x-4">
        <h1 className="text-7xl">{country.flag}</h1>
        <h5 className="text-sm font-medium text-black dark:text-white">{country.name.official}</h5>
      </div>
      <div className="flex-1">
        <h6>Languages:</h6>
        {Object.values(country.languages).map((language) => (
          <span className="inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  inset-ring" key={language}>
            {language}
          </span>
        ))}
        <p>Region: {country.region}</p>
        <p>Population: {country.population}</p>
      </div>
      <button
        type="button"
        onClick={setCountryBookmark}
        className={`flex-none items-center rounded-md  px-2 py-1 text-xs font-medium  inset-ring
          ${isBookmarked ? "bg-green-50 text-green-600 inset-ring-green-500/10" : "bg-gray-50 text-gray-600 inset-ring-gray-500/10"}
          `}
      >
        <BookmarkIcon fill={isBookmarked ? "green" : "transparent"} />
      </button>
    </div>
  );
};

export default CountryCard;
