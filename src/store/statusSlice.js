import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  status: 'inactive',
}

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.status = action.payload
    },
  },
})
export const { updateStatus } = statusSlice.actions
export default statusSlice
