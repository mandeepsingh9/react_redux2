import { createSlice } from "@reduxjs/toolkit";


    const PrivacySlice=createSlice(
        {
            name:"privacy",
            initialState:{private:false},
            reducers:{
                privacy:(state,action)=>{
                    state.private=!state.private
                }
            }
        }
    )


     export const PrivacyAction=PrivacySlice.actions;
    export default PrivacySlice;