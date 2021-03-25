import {createContext, useState} from 'react';
import axios from 'axios'


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
        const url = `https://api.punkapi.com/v2/beers?beer_name=${val}`
       

        axios.get(url)
                .then((response)=>{
                    
                    // setBeerList(response.data);
                    //setState({...state, search: response.data})
                    setState({beer: response.data})
                }, 
                (error)=>{}
        )
       

         //const beerSearch = state.beer.filter(b => b.name.toLowerCase().includes(val))
         //setState({...state, search: beerSearch})
        
     }

     const setRandom = (val) => {
         console.log("setRandom..", val)
         setState({...state, beer: val})
     }

   
     return <GlobalContext.Provider
        value={{
            beerList: state.beer,
            setBeerList,
            setSearchField,
            setRandom
        }}
     >
         {children}
     </GlobalContext.Provider>
 }