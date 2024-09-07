import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data        : [],
        isLoading   : false,
        error       : null
    },
    extraReducers(builder){
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data      = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error     = action.error;
        });
    } 
    // reducers: {}  -> this slice wont use any reducers, only extraReducers
    // extraReducers allows us to watch for additional action types that are not inheritably attached to this slice
});

export const usersReducer = usersSlice.reducer;