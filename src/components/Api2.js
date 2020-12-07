import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function Api2(){
    const [post,setPost]= useState([])
    useEffect(()=>{
        console.log('hi')
        Axios.get(' https://jsonplaceholder.typicode.com/posts').then(res=>
        {console.log(res.data[0])
        setPost(res.data[0]);
        
        },[])

    })
    console.log(post)
    return(
        <>
        <ul>
            <li>{post.title.map(item,index)}</li>
        </ul>
        </>
    )
}


export default Api2;