import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  option: [],
}

const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    setOption: (state, action) => {
      state.option = action.payload
    },
  },
})
export const { setOption } = optionSlice.actions
export default optionSlice
