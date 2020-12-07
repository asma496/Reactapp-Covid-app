import React, {useState} from 'react'



function Room(){
     let [num,setNum]= useState(true);
     let [temp,setTemp]= useState(72);

    return(
        <div>
        {/* {num? 'great':'getlost'} */}
        {/* {className= 'lit', 'dark'} */}
        {/* <button onClick={()=>setNum(++num)}> ON </button>
        <button onClick={()=>setNum()}>OFF</button> */}
        <div className ={`${num?'lit':'dark'}`}>let see</div>
        <button onClick={()=>setNum(num +1)}> ON </button>
        <button onClick={()=>setNum(num -1)}>OFF</button>

        <p>{num}</p>
               
       {/* <div className={`}`}></div>
         <button onClick={()=>setTemp(++temp)}>+ </button>
        <button onClick={()=>setTemp(--temp)}>-</button> 
        <p>{temp}</p>
 */}
        </div>
    )
 
}

export default Room;