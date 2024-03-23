import axios from "axios";

const ApiBaseUrl = 'http://localhost:3001/';

// const token = sessionStorage.getItem('authtoken')
const Api = axios.create({
    baseURL: ApiBaseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Authorization: `Bearer ${token}`
    },
});

const ApiService = {
    Register : (userdata) => Api.post('register', userdata),
    Login : (userdata) =>Api.post('login',userdata),
    addcategory : (categoryData) => Api.post('add-category',categoryData),
    getcategorylist : () => Api.get('get-category-list'),
    deletecategory : (params) => Api.delete('delete-category',{params}),
    editcategory : (categoryData,params) => Api.put('edit-category',categoryData,{params}),
    getcategorybyid : (params) => Api.get('categories',{params})
};

export default ApiService;
