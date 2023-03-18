import React,{useContext,useEffect} from 'react';
import './Card.css'
import BackspaceIcon from '@mui/icons-material/Backspace'
import nodeContext from './nodeContext';


const Card = ({value,index,uniqueChar}) => {
  const a=useContext(nodeContext)
 const tempstr=[...a.state];

  

    const handleClick= (e,i)=>{
        console.log("click",e,i)
         
       
      
         const arrstr=tempstr.filter((ele,ind)=>{
           return (
            ind==i || ele!=e
           )
        })
         
        console.log(uniqueChar,arrstr.length)
        
        a.setState(arrstr);
        
        console.log(arrstr) 
        
        if(uniqueChar.size===arrstr.length){
            setTimeout(()=>{
                alert("success")
            },100)
        }
        }
        
        
    

   const items = [  "#915c83",
   "blue",
   "yellow",
   "green",
   "orange",
   "#deb887",
   "Aqua",
   "#de5d83",
   "#809980",
   "#E6FF80",
   "#1AFF33",
   "#5d8aa8",
   "#FF3380",
   "#CCCC00",
   "#ffbf00",
   "#4D80CC",
   "#FF4D4D",
   "#99E6E6",
   "#000080","#7fffd4","#de3163","#df00ff","#faf0be","#ffbcd9","#893f45","#9f8170"];

    return( <div>
        
        
        <div className="-container" style={{backgroundColor: items[value.charCodeAt()-97]}}>
            
               <div className='cross' onClick={()=>handleClick(value,index)}>
                <BackspaceIcon />
               </div>
               <div className="inner-cont">
               <h2>{value}</h2>
               </div>
              
              
        </div>
    </div>
    );
    }



export default Card;