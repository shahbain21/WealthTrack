// AssetPopup.js
import "./AssetPopup.css";
import React from 'react';

const AssetPopup = ({ data, onClose }) => {
    const { id, value, purchasePrice, purchaseDate, notes } = data.data;
    return (
      <div className="asset-popup">
        <div className="popup-content">
          <h2>{id}</h2>
          <p>Value: ${value}</p>
          {purchasePrice && <p>Purchase Price: ${purchasePrice}</p>}
          {purchaseDate && <p>Purchase Date: {purchaseDate}</p>}
          {notes && <p>Notes: {notes}</p>}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

export default AssetPopup;