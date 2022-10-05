import { configureStore } from '@reduxjs/toolkit'
import rockPaperScissorsReducer from './slice/rockPaperScissorsSlice'


export const store = configureStore({
  reducer: {
    rockPaperScissors: rockPaperScissorsReducer,
  },
})