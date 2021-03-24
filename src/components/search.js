import React, {useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

export const Search = () => {
    const {state, setSearchField} = useContext(GlobalContext);
    
    return (<div>
        <input type="text" placeholder="Search" onChange={(e) => setSearchField(e.target.value)} /> 
    </div>)
}