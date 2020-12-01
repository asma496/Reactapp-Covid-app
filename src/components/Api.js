import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import MediaCard from './MediaCard';


function Api(){
     const [confirmed, setConfirmed] = useState(0);
    const [recovered, setRecovered] = useState(0);
     const [deaths, setDeath] = useState(0);

    useEffect(()=>{
 Axios.get('https://covid19.mathdro.id/api')
 .then((res) =>{
    console.log(res.data)
    setConfirmed(res.data.confirmed.value);
    setRecovered(res.data.recovered.value);
    setDeath(res.data.deaths.value);

 } )
    },[] )
    return(
        <div>
 <MediaCard text= 'Confirmed Cases' value={confirmed} color='pink'/>
  <MediaCard text = ' Recoverd Cases' value={recovered} color='yellow'/>
  <MediaCard text= ' Death cases' value={deaths} color='red'/>

        
        </div>
    );
}

export default Api;