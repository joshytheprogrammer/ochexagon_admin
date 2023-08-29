import { useEffect, useState } from 'react';
// import { CountriesContext } from '@app/page';

const useSearch = (dataArray, filteredBy, searchInput) => {
  const [filteredData, setFilteredData] = useState([]);
  
  const lowerCase = (text) => {
    const lowerCaseText = text.toLowerCase();
    
    return lowerCaseText;
  }

  useEffect(() => {
    const searchFunction = () => {
      const filteredResults = dataArray.filter(() => 
        lowerCase(filteredBy).includes(lowerCase(searchInput))
      );
      setFilteredData(filteredResults);
    }

    searchFunction(searchInput);  
  }, [dataArray, filteredBy, searchInput]);

  return { filteredData };
}
 
export default useSearch;