import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

export default function Create() {
    const {register,handleSubmit} = useForm();

    const [preview ,setPreview] = useState(null);

    const handleImagePreview = (event)=>{
    setPreview(URL.createObjectURL(event.target.files[0]));
    }

    const CreateUser = async(values)=>{
        try{
        const fromData = new FormData();
        fromData.append("name",values.name);
        fromData.append("email",values.email);
        fromData.append("age",values.age);
        fromData.append("image",values.image[0]);

        const response = await axios.post(`http://ums12.runasp.net/api/users`,fromData);
        toast.success("User created successfully 🎉");
         console.log(response);
    }
    catch(error){
        toast.error("Failed to create user ❌");
        console.log(error);
    }
    }
  return (
    <section className='createForm py-5 ms-3'>
           <form onSubmit={handleSubmit(CreateUser)} encType='multipart/form-data'>  
       <div className="form-floating mb-3">
            <input {...register('name')} type="text" class="form-control" id="name" placeholder="" />
            <label for="name">User Name</label>
       </div> 

        <div className="form-floating mb-3">
            <input {...register('email')} type="email" class="form-control" id="email" placeholder="" />
            <label for="email">User Email</label>
       </div> 

        <div className="form-floating mb-3">
            <input {...register('age')} type="number" class="form-control" id="age" placeholder="" />
            <label for="age">User Age</label>
       </div> 

         <div className="form-floating mb-3">
            
            <input {...register('image')} onChange={handleImagePreview} type="file" class="form-control" id="image" placeholder="" />
            <label for="image">User Image</label>
            {preview && <img src={preview} width={100} className='uploadImg w-25 rounded-3 pt-2' /> }
       </div>
       <button type='submit' className='btn btn-outline-primary'>Create</button>
    </form>

    </section>
  )
}
