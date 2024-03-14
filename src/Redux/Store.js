import { configureStore } from '@reduxjs/toolkit'
import questionReducer from './Slice/Slice'
export const store = configureStore({
  reducer: {
    question:questionReducer
  },
})