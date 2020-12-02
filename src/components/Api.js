import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import MediaCard from './MediaCard';
import {Bar, Line} from 'react-chartjs-2'
import Grid from '@material-ui/core/Grid'


function Api(){
     const [confirmed, setConfirmed] = useState(0);
    const [recovered, setRecovered] = useState(0);
     const [deaths, setDeath] = useState(0);
     const [data, setData]= useState({});

    useEffect(()=>{
 Axios.get('https://covid19.mathdro.id/api')
 .then((res) =>{
    console.log(res.data)
    setConfirmed(res.data.confirmed.value);
    setRecovered(res.data.recovered.value);
    setDeath(res.data.deaths.value);
    setData({
       confirmed,
       recovered,
       deaths
    })

 } )
    },[] )
    return(
       <>
       <h1 style={{textAlign:"center", fontSize:"50px"}}>covid19-app</h1>
        <Grid container >
        <Grid item xs={12}  md={4} lg={4}>
        
       <div className="merge">
    
 <MediaCard text= 'Confirmed Cases' value={confirmed} color='pink'/>
  <MediaCard text = ' Recoverd Cases' value={recovered} color='Purple'/>
  <MediaCard text= ' Death cases' value={deaths} color='red'/>
        
        </div>
        </Grid>
      
        <Grid item xs={12} md={8} lg={8}>
      
        <div className="disp">
           <Bar data={{
          labels: ['confirmed', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed, recovered, deaths],
            },
          ],
        }}/>
        </div>
        </Grid>
      
        </Grid>
        </>
    );
}

export default Api;