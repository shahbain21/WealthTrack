import { createSlice } from "@reduxjs/toolkit";

// TODO: REMOVE IMPORT
import testData from "../Test/TestData";

const assetsSlice = createSlice({
   name: 'assets',
   initialState: {
      value: {
         assets: testData
         // assets: {
         //    "stocks": [],
         //    "crypto": [],
         //    "Real Estate": [],
         //    "Precious Metals": [],
         //    "Other": []
         // }
      },
   },
   reducers: {
      addAsset: (state, action) => {
         console.log(action.payload);
         console.log(state.value.assets)
         state.value.assets[action.payload.assetType].push(action.payload);
      }
   }
});

export const { addAsset } = assetsSlice.actions;

export default assetsSlice.reducer;