import React, { useState } from 'react';
import Navbar from '../../Atoms/Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { updateAsset } from '../../reducers/assets';

import './UpdatePage.css';

const UpdatePage = () => {
   const dispatch = useDispatch();
   const assets = useSelector((state) => state.assets.value.assets);

   const [selectedAsset, setSelectedAsset] = useState(null);
   const [assetName, setAssetName] = useState('');
   const [purchasePrice, setPurchasePrice] = useState('');
   const [purchaseDate, setPurchaseDate] = useState('');
   const [currentMarketValue, setCurrentMarketValue] = useState('');
   const [notes, setNotes] = useState('');

   const handleAssetSelect = (asset) => {
      setSelectedAsset(asset);
      setAssetName(asset.id);
      setPurchasePrice(asset.purchasePrice || '');
      setPurchaseDate(asset.purchaseDate || '');
      setCurrentMarketValue(asset.value || '');
      setNotes(asset.notes || '');
   };

   const handleUpdate = () => {
      if (selectedAsset) {
      const updatedAsset = {
         ...selectedAsset,
         purchasePrice: purchasePrice || null,
         purchaseDate: purchaseDate || null,
         value: currentMarketValue || null,
         notes: notes || '',
      };
      console.log(JSON.stringify(updatedAsset, null, 2));
      dispatch(updateAsset(updatedAsset));
      setSelectedAsset(null);
      setAssetName('');
      setPurchasePrice('');
      setPurchaseDate('');
      setCurrentMarketValue('');
      setNotes('');
      }
   };

return (
   <div className="updatePage">
   <Navbar active="Update" />
   <div className="table-container">
      <table className="table">
         <thead>
         <tr>
            <th>Assets</th>
         </tr>
         </thead>
         <tbody>
         {Object.keys(assets).map((category) => (
            <React.Fragment key={category}>
               <tr
               className="category-row"
               data-toggle="collapse"
               data-target={`#${category}`}
               
               >
               <td>{category}</td>
               <td>&nbsp;</td>
               </tr>
               {assets[category].map((asset) => (
               <tr key={asset.id} id={category} className="asset-row collapse">
                  <td>&nbsp;</td>
                  <td
                     onClick={() => handleAssetSelect(asset)}
                     className="asset-name"
                  >
                     {asset.id}
                  </td>
               </tr>
               ))}
            </React.Fragment>
         ))}
         </tbody>
      </table>
   </div>

   <div className="form-container">
      <h4>Update your asset</h4>
      <input
         onChange={(e) => setAssetName(e.target.value)}
         value={assetName}
         placeholder="Asset Name"
         disabled
      />
      <input
         onChange={(e) => setPurchasePrice(e.target.value)}
         value={purchasePrice}
         placeholder="Purchase Price"
      />
      <input
         onChange={(e) => setPurchaseDate(e.target.value)}
         value={purchaseDate}
         placeholder="Purchase Date"
      />
      <input
         onChange={(e) => setCurrentMarketValue(e.target.value)}
         value={currentMarketValue}
         placeholder="Current Market Value"
      />
      <input
         onChange={(e) => setNotes(e.target.value)}
         value={notes}
         placeholder="Notes"
      />

      <button type="button" onClick={handleUpdate}>
         Update
      </button>
   </div>
   </div>
);
};

export default UpdatePage;
