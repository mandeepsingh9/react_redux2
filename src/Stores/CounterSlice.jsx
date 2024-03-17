import { createSlice } from "@reduxjs/toolkit";

const CounterSlice=createSlice(
       {
        name:"counter" ,
        initialState:{count:0},
        reducers:
                  {              
                    increment: (state,action)=>{ 
                        state.count++;
                    },
                    decrement:(state,action)=>{
                      state.count--;
                    },
                    add:(state,action)=>{
                      
                      state.count+=Number(action.payload);
                    }  
                  }
       }
                          
    )

    export const Counteraction=CounterSlice.actions;

    export default CounterSlice;