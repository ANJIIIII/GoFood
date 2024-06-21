import { createSlice } from "@reduxjs/toolkit";

 
 export const MyappSlice= createSlice({
    name:"myapp",
    initialState:[],
    reducers:{
        add:()=>{},
        remove:()=>{}
    }
 });

 export const {add,remove}=MyappSlice.actions;
 export default MyappSlice.reducer;