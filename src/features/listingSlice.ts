import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { getPropertyList, ListingData } from '../scraper';

export interface ListingState {
  value: ListingData[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ListingState = {
  value: [],
  status: 'idle',
};


export const getListing = createAsyncThunk(
  'listing/getPropertyList',
  async () => {
    const response = await getPropertyList();
    return response;
  }
);

export const listingSlice = createSlice({
  name: 'listing',
  initialState,

  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(getListing.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getListing.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(getListing.rejected, (state) => {
        state.status = 'failed';
      });
  },
});


export const selectListings = (state: RootState) => state.listing.value;

export default listingSlice.reducer;
