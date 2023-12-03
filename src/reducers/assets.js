// assetsSlice.js

import { createSlice } from "@reduxjs/toolkit";
import testData from "../Test/TestData";

const assetsSlice = createSlice({
   name: 'assets',
   initialState: {
      value: {
         assets: testData,
      },
   },
   reducers: {
      addAsset: (state, action) => {
         const { assetType, ...assetData } = action.payload;
         state.value.assets[assetType].push(assetData);
      },
      updateAsset: (state, action) => {
         const { id, assetType, ...updatedData } = action.payload;

         const category = state.value.assets[assetType];

         if (category) {
            const index = category.findIndex(asset => asset.id === id);

             if (index !== -1) {
         console.log('Updating asset:', id, 'in category:', assetType);
         console.log('Old data:', state.value.assets[assetType][index]);
         
         // Update the data
         state.value.assets[assetType][index] = { id, ...updatedData };

         console.log('New data:', state.value.assets[assetType][index]);
      }
         }
      },
   },
});

export const { addAsset, updateAsset } = assetsSlice.actions;

export default assetsSlice.reducer;
