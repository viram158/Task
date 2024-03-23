import React, { useEffect, useState } from 'react';
import ApiService from '../../API/ApiController';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function EditCategory() {
    const [name, setName] = useState('');
      const id = useParams()
    useEffect(()=>{
        ApiService.getcategorybyid({id:id.categoryid}).then((response)=>{
            if(response.data.status === true){
                setName(response.data.data.name)
            }
        })
    },[])
    const handleEditCategory = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            // Call API to edit category
            const response = await ApiService.editcategory({ name },{id:id.categoryid}); // Pass updated category data

           if(response.data.status === true){
            Swal.fire({
                icon:'success',
                text:response.data.message
            })
           }

            // Reset input field
            setName('');
        } catch (error) {
            // Handle errors
            console.error('Error editing category:', error);
        }
    };

    return (
        <div>
            <section className='category-form'>
                <form onSubmit={handleEditCategory} className='form-category'>
                    <div className='form-group'>
                        <label htmlFor="add-category" className='form-label'>Category</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter Category Name'
                            className='form-control'
                        />
                    </div>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </form>
            </section>
        </div>
    );
}

