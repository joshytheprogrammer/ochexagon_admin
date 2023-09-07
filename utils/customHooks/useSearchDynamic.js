import { useEffect, useState } from "react";

const useDynamicSearch = (
  dataArray,
  searchInput,
  keyString,
  keyString2,
) => {
  const [filteredData, setFilteredData] = useState(dataArray);

  const lowerCase = (text) => {
    const lowerCaseText = text.toLowerCase();

    return lowerCaseText;
  };

  useEffect(() => {
    const searchFunction = () => {
      const filteredResults = dataArray.filter(
        (data) =>
          lowerCase(data[keyString]).includes(lowerCase(searchInput)) ||
          lowerCase(data[keyString2].includes(lowerCase(searchInput)))
      );
      setFilteredData(filteredResults);
    };

    searchFunction(searchInput);
  }, [dataArray, keyString, keyString2, searchInput]);

  return { filteredData };
};

export default useDynamicSearch;
