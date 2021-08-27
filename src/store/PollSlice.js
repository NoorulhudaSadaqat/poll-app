import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  pollsArray: [],
}

const PollSlice = createSlice({
  name: 'polls',
  initialState,
  reducers: {
    addPoll: (state, action) => {
      state.pollsArray.push(action.payload)
      console.log('after added', state.pollsArray)
    },
    deletePoll: (state, action) => {
      const index = action.payload
      state.pollsArray.splice(index, 1)
      console.log('Array after deleting : ' + state.pollsArray)
    },
    vote: (state, action) => {
      const { index, option } = action.payload
      state.pollsArray[index].options[option].noOfVotes += 1
    },
  },
})

export const { addPoll, deletePoll, vote } = PollSlice.actions
export default PollSlice
