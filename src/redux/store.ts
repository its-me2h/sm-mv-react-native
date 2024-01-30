import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './userSlice'
import { navReducer } from './navSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        nav: navReducer,
    }
})