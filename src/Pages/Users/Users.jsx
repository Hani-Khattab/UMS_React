import axios from 'axios'
import Loader from '../../Components/Loader/Loader';
import UseFetch from '../../hooks/UseFetch';
import User from '../../Components/user/User';
export default function Users() {

    const {data , isLoader , isError} = UseFetch(`${import.meta.env.VITE_BURL}/users`);
    const handleDelete = async (id)=>{

        try{
          
            await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
        }catch{


        }
    }

    if(isLoader) return <Loader />
    if(isError) return <div className='alert alert-danger'>{isError}</div>
    return (
        <section className='users py-5 text-center'>
            <div className="container">
                <div className="row g-3">
                    {data.users.map( (user)=>
                    <User user={user} onDelete={handleDelete} />
                    )}
                </div> 
            </div>
        </section>
  )
}
