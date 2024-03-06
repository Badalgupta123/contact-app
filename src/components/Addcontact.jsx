import React from 'react'
import { useDispatch } from 'react-redux'
import { createContact } from '../utils/contactSlice';


const Addcontact = ({formData,setFormData}) => {
    const dispatch= useDispatch();
   
    const handleSubmit = (e) => {
        e.preventDefault();
       
          dispatch(createContact({id:Date.now(),...formData}))

        setFormData({
          name: '',
          email: '',
          
        });
      };
    const handleChange= (e)=>{
       
        const { name, value } = e.target;
       
        setFormData({
            ...formData,
            [name]: value
          });
    }
  return (
    <div className='flex flex-col w-[40%] mx-auto'>
        <form onSubmit={handleSubmit}>
            <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder='Enter name'
                    onChange={handleChange}
                    required
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
            </div>
            <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                placeholder='Enter gmail'
                onChange={handleChange}
                required
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
            </div>
           
            <button type='submit' className='text-white bg-gradient-to-br mt-2 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Create</button>
        </form>
    </div>
  )
}

export default Addcontact