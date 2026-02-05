import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function User({user}) {

    
  return (
     <div className="col-md-4">
                        <div className="user bg-success py-3">
                            <h2>{user.name}</h2>
                            <img className='Users_Img w-75 ' src={user.imageUrl} alt="Users_Image" />
                            <p>Email: {user.email}</p>
                            <Link to={`/users/${user.id}`} className='btn btn-outline-info'>Details</Link>
                        </div>
                    </div>
  )
}
