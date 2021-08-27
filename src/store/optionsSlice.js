import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  options: [],
}

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    updateOptions: (state, action) => {
      console.log(' value in action payload :' + action.payload)
      state.options.push(action.payload)
    },
    resetOptions: (state, action) => {
      state.options = []
    },
  },
})

export const setOptions = (option) => async (dispatch) => {
  await dispatch(optionsSlice.actions.updateOptions(option))
}

export const { updateOptions, resetOptions } = optionsSlice.actions
export default optionsSlice
