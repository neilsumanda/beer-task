import axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import { Search } from './search';


export const Main = () => {
    const {beerList, setBeerList} = useContext(GlobalContext)
    // const [beerList, setBeerList] =useState([]);

    useEffect(() => {

        const url = 'https://api.punkapi.com/v2/beers';
        axios.get(url)
            .then((response) => {
                
                setBeerList(response.data);
            }, (error) => {
                
            })
            
    }, [])

    return(<div>
        <div className="" style={{padding: `10px 40px`, position:'absolute'}}>
            
            <Search />
            &nbsp; &nbsp; 
            
        </div>
        <div style={{'paddingLeft': '90%'}}>
            <input type="button" value="Random"/> <br />
        </div>
        
        <ul>

            {beerList.map((beer,idx) => 
            <div  key={beer.id}>
               
                <li key={beer.id} className="beer-item">
                    <div className="main-img" >
                        <img className="img-list" src={beer.image_url} />         
                    </div>
                    <div className="main-name" >
                        <label className="beer-name">{beer.name}</label>
                        <div>
                            {beer.description.substring(0, 50)}... 
                        </div>

                        
                    </div>

                    <div className="arrow arrow-main" >
                        
                            <Link className="link" to={`/detail/${beer.id}`} >&#8594;</Link>
                        </div>    
                    
                    <br />
                    
                    
                </li>
            </div>
          
        )}
 
                   
        </ul>
 
    </div>)
}