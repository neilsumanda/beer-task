import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';



export const Detail = ({match}) => {
    const [beer, setBeer] = useState({})

    const fetchItem = async () => {
        let id = match.params.id;
        const ajax = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
        const data = await ajax.json();
        // console.log("data..", data[0])
        setBeer(data[0])

        return data[0];
    }

    
    useEffect(() => {
        

        const items = fetchItem();        
        
    }, [])

    return (<div>
        {beer.name && 
        
        <div>
            <div className="arrow">
                <Link to="/" >&#8592;</Link>
            </div>
            <br />

            <div className="detail-image" >
                <img className="img-detail"  src={`${beer.image_url}`} />
            </div>
            <div style={{'paddingLeft': '104px'}}>
                <div className="detail-label"><b>{beer.name} - {beer.tagline}</b></div>
                <div className="detail-label">{beer.first_brewed}</div>
                <div className="detail-label">{beer.ibu}</div>
                <div className="detail-label">{beer.abv}</div>
                <div className="detail-label">{beer.description}</div>
            </div>
        </div>
        
        || <p>Loading...</p>}
           
    </div>)
}

