import React, { useState } from 'react'
import './addcategory.css'
import ApiService from '../../API/ApiController'
import Swal from 'sweetalert2'
export default function AddCategory() {
const [name,setname] =useState('')

const Addcategory = (e)=>{
    e.preventDefault()
    ApiService.addcategory({
        name:name
    }).then((response)=>{
        if(response.data.status ===  true){
            Swal.fire({
                icon: 'success',
                text:response.data.message
            })
            setname('')
        }else{
            console.log(response)
        }
    }).catch((err)=>{
        console.log(err)
    })
}


  return (
    <div>
      <section className='category-form' >
        <form action="" className='form-category'  onSubmit={Addcategory}>
            <div className='form-group'>
                 <label htmlFor="add-category" className='form-label'>Category</label>
                 <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter Category Name' className='form-control ' />
            </div>

            <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
      </section>
    </div>
  )
}
