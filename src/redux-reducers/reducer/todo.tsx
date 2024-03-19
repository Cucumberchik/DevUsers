import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type TypeUser = {
    id?: number,
    displayName: string,
    date?: string,
    job: string,
    URL: string,
}
export interface CounterState {
  value?: TypeUser[],
  search?:TypeUser[]
}

const initialState: CounterState = {
  value: JSON.parse(localStorage.getItem("users")) || [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<TypeUser>)=>{
        let users = [...state.value, action.payload];
        localStorage.setItem("users", JSON.stringify(users));
        state.value = users;
    },
    deleteUser: (state, action: PayloadAction<number>)=>{
        let users = state.value.filter((el)=>el.id !== action.payload);
        localStorage.setItem("users", JSON.stringify(users));
        state.value = users;
    },
    searchUser: (state, action: PayloadAction<string>)=>{
        let users = state.value.filter(el=> el.displayName.toLowerCase().includes(action.payload.toLowerCase()))
        state.value = users;
    }
  },
})

export const {addUser, deleteUser, searchUser} = counterSlice.actions

export default counterSlice.reducer