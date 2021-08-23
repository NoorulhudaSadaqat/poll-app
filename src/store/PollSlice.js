import { createSlice } from '@reduxjs/toolkit'

const listOfPolls = [
  {
    id: 0,
    question: ' ',
    options: [],
    status: ' ',
    selectedOption: 0,
    noOfOtions: 2,
  },
]

const PollSlice = createSlice({
  name: 'polls',
  initialState: {
    value: listOfPolls,
  },
  reducers: {
    addPoll: (state, action) => {
      state.value.push(state)
    },
  },
})
export default PollSlice
export const { addPoll } = PollSlice.actions
