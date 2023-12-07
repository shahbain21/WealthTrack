// assetsSlice.js

import { createSlice } from "@reduxjs/toolkit";
import testData from "../Test/TestData";

const assetsSlice = createSlice({
  name: "assets",
  initialState: {
    assets: {
      real_estate: [],
      stocks: [],
      crypto_currency: [],
      precious_metal: [],
      other: [],
    },
    deletedAssets: [],
    showUndo: false,
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
          [assetType]: [...state.assets[assetType], payload],
        },
      };
    },

    updateAsset: (state, action) => {
      const { id, assetType, ...updatedData } = action.payload;
      console.log("Updating asset:", id, "in category:", assetType);

      const category = state.assets[assetType];

      if (category) {
        const index = category.findIndex((asset) => asset.id === id);

        if (index !== -1) {
          console.log("Updating asset:", id, "in category:", assetType);
          console.log("Old data:", state.assets[assetType][index]);

          // Update the data
          state.assets[assetType][index] = { id, ...updatedData };

          console.log("New data:", state.assets[assetType][index]);
        }
      }
    },

    deleteAsset: (state, action) => {
      const { id, assetType } = action.payload;
      const category = state.assets[assetType];

      if (category) {
        const index = category.findIndex((asset) => asset.id === id);

        if (index !== -1) {
          console.log(
            "Deleting asset:",
            id,
            "in category:",
            assetType,
            "at index:",
            index
          );

          // Update the data
          const [deletedAsset] = state.assets[assetType].splice(index, 1);
          state.deletedAssets.push(deletedAsset);

          // Set showUndo to true when an asset is deleted
          state.showUndo = true;
        }
      }
    },

    undoDelete: (state) => {
      // Restore the last deleted asset from deletedAssets to assets
      const lastDeletedAsset = state.deletedAssets.pop();
      if (lastDeletedAsset) {
        state.assets[lastDeletedAsset.assetType].push(lastDeletedAsset);
      }
    },
  },
});

export const { addAsset, updateAsset, deleteAsset, undoDelete } = assetsSlice.actions;

export default assetsSlice.reducer;