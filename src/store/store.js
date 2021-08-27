import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import PollSlice from './PollSlice'
import questionSlice from './questionSlice'
import statusSlice from './statusSlice'
import optionsSlice from './optionsSlice'
import optionSlice from './optionSlice'

const rootReducer = combineReducers({
  poll: PollSlice.reducer,
  question: questionSlice.reducer,
  status: statusSlice.reducer,
  options: optionsSlice.reducer,
  option: optionSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export default store
