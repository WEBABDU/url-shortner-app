import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../config";

export const createShortLink = createAsyncThunk(
  "links/createShortLink",
  async (url) => {
    try {
      const response = await fetch(API_BASE_URL + url, {
        method: "POST",
      });
      return await response.json();
    } catch (error) {
      return error.message;
    }
  }
);

const initialState = {
  links: [],
  loading: "idle",
};

export const linksSlice = createSlice({
  name: "links",
  initialState,
  // reducers:{}
  extraReducers: {
    [createShortLink.pending]: (state) => {
      state.loading = "loading";
    },
    [createShortLink.fulfilled]: (state, action) => {
      const { ok, result } = action.payload;
      if (ok) {
        state.links.push(result);
        state.loading = "idle";
      } else {
        state.loading = "error";
      }
    },
    [createShortLink.rejected]: (state) => {
      state.loading = "rejected";
    },
  },
});

export default linksSlice.reducer;
