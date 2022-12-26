import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const { Provider } = SearchContext;

const SearchProvider = ({children}) => {
   const [ search, setSearch ] = useState('Wizkid');

   return <Provider value={{ search, setSearch }}> {children} </Provider>;
}

// created a custom hook that would be used to update search 
const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider}