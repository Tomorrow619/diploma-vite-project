import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterUserPayload } from "./API/authAPI"

interface initialState {
  user: null | IRegisterUserPayload 
}

const initialState: initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUser(state, action: PayloadAction<IRegisterUserPayload>) {
      state.user = action.payload;
    },
  },
});
export default userSlice.reducer;
export const { changeUser } = userSlice.actions;