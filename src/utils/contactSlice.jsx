import { createSlice } from "@reduxjs/toolkit";


export const contactSlice= createSlice({
    name:"contact",
    initialState:{
        contactList:[
           
        ],
    },
    reducers:{
        createContact:(state,actions)=>{
            state.contactList.push(actions.payload);
        },
        removeContact: (state,actions)=>{
            let id=actions.payload;
           
            state.contactList=state.contactList.filter(user => user.id!== id);
        },
        updateContact: (state, action) => {
            const { id, ...updatedData } = action.payload;
            console.log(id)
            const index = state.contactList.findIndex(contact => contact.id === id);
            if (index !== -1) {
              state.contactList[index] = { ...state.contactList[index], ...updatedData };
            }
        },

    }

})

export const {createContact,removeContact,updateContact} = contactSlice.actions;
export default contactSlice.reducer;