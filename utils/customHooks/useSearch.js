import { useEffect, useState } from 'react';

const useSearch = (dataArray, keyString, searchInput) => {
  const [filteredData, setFilteredData] = useState(dataArray);
  
  const lowerCase = (text) => {
    const lowerCaseText = text.toLowerCase();
    
    return lowerCaseText;
  }

  useEffect(() => {
    const searchFunction = () => {
      const filteredResults = dataArray.filter(data => 
        lowerCase(data[keyString]).includes(lowerCase(searchInput))
      );
      setFilteredData(filteredResults);
    }

    searchFunction(searchInput);  
  }, [dataArray, keyString, searchInput]);

  console.log(filteredData)
  return { filteredData };
}

 
export default useSearch;