import { configureStore, combineReducers } from '@reduxjs/toolkit'
import PollSlice from './PollSlice'

const rootReducer = combineReducers({
  poll: PollSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
})
export default store
