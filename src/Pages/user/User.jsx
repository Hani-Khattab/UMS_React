import React from 'react'
import { useParams } from 'react-router-dom';
import UseFetch from '../../hooks/UseFetch';
import Loader from '../../Components/Loader/Loader';

export default function User() {
    const {id} = useParams();
     const {data , isLoader , isError} = UseFetch(`${import.meta.env.VITE_BURL}/users/${id}`);
        if(isLoader) return <Loader />
        if(isError) return <div className='alert alert-danger'>{isError}</div>

  return (

    <div>
      <h2>Name: {data.data.name} </h2>  
      <h2>Age: {data.data.age} </h2>  
      <h2>Email: {data.data.email} </h2>  
    </div>
   
  )
}
