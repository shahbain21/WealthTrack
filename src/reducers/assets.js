import { createSlice } from "@reduxjs/toolkit";

// TODO: REMOVE IMPORT
import testData from "../Test/TestData";

const assetsSlice = createSlice({
   name: 'assets',
   initialState: {
      value: {
         assets: testData
      },
      reducers: {
         addAsset: (state, action) => {
            state.value.assets.push(action.payload)
         }
      }
   },
})

export default assetsSlice.reducer;