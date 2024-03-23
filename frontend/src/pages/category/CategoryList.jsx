import React, { useEffect, useState } from 'react'
import ApiService from '../../API/ApiController'
import './categorylist.css'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
export default function CategoryList() {
const [category,setcategory] = useState([])
    useEffect(()=>{
       ApiService.getcategorylist().then((response)=>{
        if(response.data.status === true){
            setcategory(response.data.data)
        }
       })
    },[]);
    const Deletecategory = (categoryId)=>{
        ApiService.deletecategory({
          id:categoryId
        }).then((response)=>{
            if(response.data.status === true){
                Swal.fire({
                    icon:"success",
                    text:response.data.message
                })
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
       <section>
        <h2>Category List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {category.map(category => (
              <tr key={category._id}>
                <td>{category._id}</td>
                <td>{category.name}</td>
                <td>
                  {/* <button>Edit</button> */}
                  <Link to={`/edit-category/${category._id}`}>
                                        <button>Edit</button>
                                    </Link>
                  <button onClick={()=>Deletecategory(category._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
