// import { configureStore } from '@reduxjs/toolkit'
// import { alertSlice } from './features/alertSlice'


// export  default configureStore({
//     reducer:{
//         alerts:alertSlice.reducers,
//     },
// });
import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import { userSlice } from "./features/userSlice";
// import { userSlice } from "./features/userSlice";

export default configureStore({
  reducer: {
    alerts: alertSlice.reducer,
     user: userSlice.reducer,
  },
});