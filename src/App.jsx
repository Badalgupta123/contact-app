import { useState } from "react";
import Addcontact from "./components/Addcontact"
import Contacts from "./components/Contacts"
import UpdateContact from "./components/UpdateContact";

function App() {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [selected,setSelected]= useState(null);
  const [formData,setFormData]= useState({
      name:'',
      email:'',
  });
  return (
    <div className="">
      <div className="w-full font-bold text-2xl text-center h-20 bg-blue-300">
        Contact App 
      </div>
      {
        isUpdateMode?(
          <UpdateContact selected={selected} setIsUpdateMode={setIsUpdateMode} formData={formData}  setFormData={setFormData}/>
        ):(
          <Addcontact formData={formData}  setFormData={setFormData}/>
        )
      }
     
      
      <Contacts setSelected={setSelected} selected={selected} setIsUpdateMode={setIsUpdateMode}  setFormData={setFormData}/>
    </div>
  )
}

export default App
