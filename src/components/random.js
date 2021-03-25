import React, {useContext, useEffect} from 'react'
import axios from 'axios';
import { GlobalContext } from '../contexts/GlobalContext'

export const Random = () => {
    const {beerList, setRandom} = useContext(GlobalContext)

    const handleClick = ( ) =>{
        const url = "https://api.punkapi.com/v2/beers/random";
        axios.get(url)
            .then(response => {
                // console.log(response.data);
                setRandom(response.data)
            }, (error) => {

            })

    }

    useEffect(() => {

    
    }, [])

    return (<div>
        <input type="button" onClick={() => handleClick()} value="Random"/> <br />
    </div>)
}