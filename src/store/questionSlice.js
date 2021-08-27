import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  question: '',
}

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload
    },
  },
})
export const { setQuestion } = questionSlice.actions
export default questionSlice
