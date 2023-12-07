import React, { useState, useEffect } from 'react';
import Navbar from '../../Atoms/Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { updateAsset, deleteAsset, undoDelete } from "../../reducers/assets";
import { toast } from "react-toastify";
import { cleanName } from '../../Helper/namers';
import { Navigate } from 'react-router';

import './UpdatePage.css';

const updateToast = (id) => {
  toast.success(`successfully updated ${id}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
    theme: "light",
    });
}

const deleteToast = (id) => {
  toast.success(`successfully deleted ${id}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
    theme: "light",
  });
}

const undoToast = (id) => {
  toast.success(`Action deleting ${id} undone`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
    theme: "light",
  });
}

const UpdatePage = () => {
   const dispatch = useDispatch();
   const assets = useSelector((state) => state.assets.assets);
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
   const [selectedAsset, setSelectedAsset] = useState(null);
   const [assetName, setAssetName] = useState('');
   const [purchasePrice, setPurchasePrice] = useState('');
   const [purchaseDate, setPurchaseDate] = useState('');
   const [currentMarketValue, setCurrentMarketValue] = useState('');
   const [notes, setNotes] = useState('');
   const [showUndo, setShowUndo] = useState(false);


   const handleAssetSelect = (asset) => {
      setSelectedAsset(asset);
      setAssetName(asset.id);
      setPurchasePrice(asset.purchasePrice || '');
      setPurchaseDate(asset.purchaseDate || '');
      setCurrentMarketValue(asset.value || '');
      setNotes(asset.notes || '');
   };

   useEffect(() => {
     // Show "Undo" button for 5 seconds after a deletion
     if (showUndo) {
       const timeoutId = setTimeout(() => {
         setShowUndo(true);
       }, 5000);

       return () => clearTimeout(timeoutId);
     }
    }, [showUndo]);


    const handleUpdate = () => {
      if (selectedAsset) {
        const updatedAsset = {
          ...selectedAsset,
          purchasePrice: purchasePrice || null,
          purchaseDate: purchaseDate || null,
          value: currentMarketValue || null,
          notes: notes || "",
        };
         console.log("Selected Asset1:", selectedAsset);

        // Ensure you have the correct assetType from selectedAsset or provide it as needed
        const assetType = selectedAsset.assetType || "stocks";

        dispatch(
          updateAsset({
            id: selectedAsset.id,
            assetType: assetType,
            ...updatedAsset,
          })
          );
          updateToast(selectedAsset.id);
      }
   };

   const handleDelete = () => {
     if (selectedAsset) {
       setShowUndo(true);
       dispatch(
         deleteAsset({
           id: selectedAsset.id,
           assetType: selectedAsset.assetType,
         })
       );

       const id = selectedAsset.id;
       setSelectedAsset(null);
       setAssetName("");
       setPurchasePrice("");
       setPurchaseDate("");
       setCurrentMarketValue("");
       setNotes("");

       deleteToast(id);
     }
   };

    const handleUndo = () => {
      dispatch(undoDelete());
      setShowUndo(false);
    };

    const [collapsedTypes, setCollapsedTypes] = useState(Object.keys(assets));

    if(!isAuthenticated) return <Navigate to="/"/>

    const handleTypeToggle = (category) => {
      if (collapsedTypes.includes(category)) {
        setCollapsedTypes(collapsedTypes.filter((type) => type !== category));
      } else {
        setCollapsedTypes([...collapsedTypes, category]);
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
          {Object.keys(assets).map((category) => {
            if(assets[category].length > 0) {
              return <React.Fragment key={category}>
                <tr
                  className="category-row"
                  onClick={() => handleTypeToggle(category)}
                >
                  <td>{cleanName(category)}</td>
                  <td>&nbsp;</td>
                </tr>
                {!collapsedTypes.includes(category) &&
                  assets[category].map((asset) => (
                    <tr key={asset.id} className="asset-row">
                      <td
                        onClick={() => handleAssetSelect(asset)}
                        className="asset-name"
                      >
                        {asset.id}
                      </td>
                    </tr>
                  ))}
              </React.Fragment>
            }
          })}
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
        onChange={(e) => setPurchasePrice(Number(e.target.value))}
        value={purchasePrice}
        placeholder="Purchase Price"
      />
      <input
        onChange={(e) => setPurchaseDate(e.target.value)}
        value={purchaseDate}
        placeholder="Purchase Date"
      />
      <input
        onChange={(e) => setCurrentMarketValue(Number(e.target.value))}
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

      <button className='delete' type="button" onClick={handleDelete}>
          Delete
        </button>

      {showUndo && (
        <button className="undo" type="button" onClick={handleUndo}>
          Undo
        </button>
      )}
    </div>
  </div>
);
};

export default UpdatePage;
