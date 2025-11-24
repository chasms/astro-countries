import { useEffect, useState } from "react";
import type { Country } from "../types";
import CountryCard from "./CountryCard";

const localStorageCountryBookmarksKey = "CountryBookmarks";

const CountriesList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [countryBookmarks, setCountryBookmarks] = useState<Record<Country["flag"], boolean>>({});

  const setCountryBookmark = (countryFlag: Country["flag"]) => {
    const currentlyBookmarked = countryBookmarks[countryFlag];

    const newBookmarks = { ...countryBookmarks, [countryFlag]: !currentlyBookmarked };

    localStorage.setItem(localStorageCountryBookmarksKey, JSON.stringify(newBookmarks));

    setCountryBookmarks(newBookmarks);
  };

  async function getAndSetCountries() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flag,region,languages,population");
      const countries = await response.json();
      setCountries(countries);
    } catch (error) {}
  }

  function getCountryBookmarks() {
    try {
      const response = localStorage.getItem(localStorageCountryBookmarksKey);

      if (!response) return;

      const countryBookmarks = JSON.parse(response);

      setCountryBookmarks(countryBookmarks);
    } catch (error) {}
  }

  useEffect(() => {
    getCountryBookmarks();
    getAndSetCountries();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {countries?.map((country) => (
        <CountryCard
          key={country.name.official}
          country={country}
          setCountryBookmark={() => setCountryBookmark(country.flag)}
          isBookmarked={!!countryBookmarks[country.flag]}
        />
      ))}
    </div>
  );
};

export default CountriesList;
