// assetsSlice.js

import { createSlice } from "@reduxjs/toolkit";
import testData from "../Test/TestData";

const assetsSlice = createSlice({
   name: 'assets',
   initialState: {
      assets: testData,
   },
   reducers: {
      addAsset: (state, action) => {
         const { assetType } = action.payload;

         let payload = action.payload;

         payload.value = Number(payload.value);
         payload.purchasePrice = Number(payload.purchasePrice);


         return {
            ...state,
            assets: {
               ...state.assets,
               // assetType: "test"
               [assetType]: [...(state.assets[assetType]), payload],
            },
         };
      },

      updateAsset: (state, action) => {
         const { id, assetType, ...updatedData } = action.payload;
         console.log("Updating asset:", id, "in category:", assetType);

         const category = state.assets[assetType];

         if (category) {
            const index = category.findIndex(asset => asset.id === id);

             if (index !== -1) {
         console.log('Updating asset:', id, 'in category:', assetType);
         console.log('Old data:', state.assets[assetType][index]);

         // Update the data
         state.assets[assetType][index] = { id, ...updatedData };

         console.log('New data:', state.assets[assetType][index]);
      }
         }
      },
   },
});

export const { addAsset, updateAsset } = assetsSlice.actions;

export default assetsSlice.reducer;