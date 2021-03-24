import {createContext, useState} from 'react';



 const initialState = {
     beer : [],
     search: []
 };

 export const GlobalContext = createContext(initialState);

 export const GlobalContextProvider = ({children}) => {
     const [state, setState]  = useState(initialState);

     const setBeerList = (list) => {
        setState({beer: list})
     }

     const setSearchField = (val) => {
         const beerSearch = state.beer.filter(b => b.name.toLowerCase().includes(val))
         setState({...state, search: beerSearch})
        
     }

     return <GlobalContext.Provider
        value={{
            beerList: state.search && state.search || state.beer,
            setBeerList,
            setSearchField
        }}
     >
         {children}
     </GlobalContext.Provider>
 }