import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UseFetch(path) {

    const [data,setData] = useState([]);
    const [isLoader,setIsLoader] = useState(true); 
    const [isError,setIsError] = useState(null); 
    const getData = async ()=>{
        try{
            const response = await axios.get(path);
            console.log(response);
            setData(response.data);
        }catch(err){
          console.log(err);
        setIsError(err.message);    
        }
        finally{
        setIsLoader(false);
        }
      }
      useEffect( ()=>{
          getData();
      } ,[] );

  return { data , isLoader , isError} 
  
}
 