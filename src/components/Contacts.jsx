import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeContact } from '../utils/contactSlice';

const Contacts = ({setFormData,selected,setSelected,setIsUpdateMode}) => {
    const dispatch= useDispatch();
    const data = useSelector(state=> state.contact.contactList)
    const list= useSelector(state => state.contact.contactList)
    
    
    const handleDelete=(id)=>{
        if(id === selected){
            setIsUpdateMode(false);
            setFormData({
                name: '',
                email: '',
              });
        }
        dispatch(removeContact(id));
    }
    const handleUpdate=(userId)=>{
       
        const user=data.filter(user=>user.id === userId);
        
       const name=user[0].name;
       const email=user[0].email;
        setFormData({name,email});
        setSelected(userId);
        setIsUpdateMode(true);
    }
  return (
    <div className='flex flex-col w-[40%] mx-auto'>
        <ul>
        {
            list?.map((item)=> {
                return (
                    <li key={item.id} className='h-14 flex justify-between font-medium  border border-black mx-auto'>
                        <div className='flex flex-col pl-4'>
                            <span>
                            {item.name}
                            </span>
                            <span>
                                {item.email}
                            </span>
                        </div>
                        
                        <div className='flex'>
                            <span onClick={()=>handleUpdate(item.id)}>🙇‍♂️</span>
                            <span onClick={()=>handleDelete(item.id)} className='cursor-pointer'>❌</span>
                        </div>
                    </li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default Contacts