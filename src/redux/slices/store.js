import { configureStore } from "@reduxjs/toolkit";
import { MyappSlice } from "./MyappSlice";

export const store=configureStore({
    reducer:{
        myapp:MyappSlice
    }
})