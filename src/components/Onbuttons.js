// import React, {useState} from 'react'


// function Onbuttons(){
//       const [num, setNum]= uesState(true);
//       return(
//           <>
//           {num? 'great':'getlost'}
//           </>
//       )
   
// }

// class Onbuttons extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             // backgroundColor: "white",
//             btn: true
          
//     }
// }
//     handleOn = ()=>{
//         console.log('On')
//             // backgroundColor:"white"
//             let newnum = this.state.num
//             this.setState({

//             num: ++newnum
//         })

          
//      }

//      handleOff = ()=>{
//         console.log('Off')  
//             // backgroundColor:"black"
//             let newnum = this.state.num
//             this.setState({
//             num:--newnum
//         })

//     }
//     handle =()=>{ 
//         this.setState({
//         btn: !this.state.btn
        
//         })
//     }
        

  
//     render(){

// return(

//     <>
            
// {this.state.btn? (<button onClick={this.handle}>login </button> ):'you are logout'}
 
//  <div >{this.state.num}

// <button onClick={this.handleOn}>on</button>
// <button onClick={this.handleOff} >off</button>
// </div> 
// </>


//  )
//  }
//  }
export default Onbuttons;
