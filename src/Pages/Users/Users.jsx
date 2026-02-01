import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../../Components/Loader/Loader';

export default function Users() {

  const [users,setUsers] = useState([]);
  const [isLoader,setIsLoader] = useState(true); 
  const [error,setIsError] = useState(null); 
  const getUsers = async ()=>{
    try{

        const response = await axios.get(`${import.meta.env.VITE_BURL}/users`);
        console.log(response);
        setUsers(response.data.users);

    }catch(err){
    setIsError("Server Error .....")    
    }
    finally{
    setIsLoader(false);

    }
  }
  
  
useEffect( ()=>{

    getUsers();

} ,[] )

    if(isLoader) return <Loader />

    if(error) return <div className='alert alert-danger'>{error}</div>

    return (
        <section className='users py-5 text-center'>
            <div className="container">
                <div className="row g-3">
                    {users.map( (user)=>
                    <div className="col-md-4">
                        <div className="user bg-success py-3">
                            <h2>{user.name}</h2>
                            <img className='Users_Img w-75 ' src={user.imageUrl} alt="Users_Image" />
                            <p>Email: {user.email}</p>
                            <span>Age: {user.age}</span>

                        </div>
                    </div>
                    )}
                </div>
            </div>
        </section>
  )
}
