import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import PrivacySlice from "./PrivacySlice";
const store=configureStore({ 
                            
                            reducer:{
                                      counter:CounterSlice.reducer,
                                      privacy:PrivacySlice.reducer,
                                    }
                           
                          });

 export default store;                         