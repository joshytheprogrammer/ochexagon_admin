import { useEffect, useState } from 'react';

const useSearch = (dataArray, searchInput, keyString, nestedKeyString) => {
  const [filteredData, setFilteredData] = useState(dataArray);
  
  const lowerCase = (text) => {
    const lowerCaseText = text.toLowerCase();
    
    return lowerCaseText;
  }

  useEffect(() => {
    const searchFunction = () => {
      const filteredResults = dataArray.filter(data => 
        lowerCase(data[keyString][nestedKeyString]).includes(lowerCase(searchInput))
      );
      setFilteredData(filteredResults);
    }

    searchFunction(searchInput);  
  }, [dataArray, keyString, searchInput, nestedKeyString]);

  return { filteredData };
}

 
export default useSearch;