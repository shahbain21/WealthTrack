import "./InputPage.css";
import Navbar from "../../Atoms/Navbar/Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsset } from "../../reducers/assets";

const InputPage = () => {
   const dispatch = useDispatch();
   const [assetType, setAssetType] = useState("Real Estate");
   const [assetName, setAssetName] = useState("");
   const [purchasePrice, setPurchasePrice] = useState("");
   const [purchaseDate, setPurchaseDate] = useState("");
   const [currentMarketValue, setCurrentMarketValue] = useState("");
   const [notes, setNotes] = useState("");
   return <div className="page loginPage">
      <Navbar active="Input"/>
      <div>
         <div>
            <h3>Asset Type</h3>
            <ul>
               {/* TODO: update these li to change cursor to look "clickable". They should be currently */}
               <button onClick={() => setAssetType("real_estate")}>Real Estate</button>
               <button onClick={() => setAssetType("stocks")}>Stocks</button>
               <button onClick={() => setAssetType("crypto_currency")}>Crypto currency</button>
               <button onClick={() => setAssetType("precious_metal")}>Precious Metal</button>
               <button onClick={() => setAssetType("other")}>Other</button>
            </ul>
         </div>
         <div>
            <input onChange={(e) => {setAssetName(e.target.value)}} placeholder="Asset Name"></input>
            <input onChange={(e) => {setPurchasePrice(e.target.value)}} placeholder="Purchase Price"></input>
            <input onChange={(e) => {setPurchaseDate(e.target.value)}} placeholder="Purchase Date"></input>
            <input onChange={(e) => {setCurrentMarketValue(e.target.value)}} placeholder="Current Market Value"></input>
            <input onChange={(e) => {setNotes(e.target.value)}} placeholder="Notes"></input>
         </div>
      </div>

      <button onClick={() => {
         const data = {
            id: assetName,
            value: currentMarketValue,
            assetType: assetType,
            purchasePrice: purchasePrice,
            purchaseDate: purchaseDate,
            notes: notes
         };

         console.log("Data: ", data);

         dispatch(addAsset(data));
      }}></button>
   </div>
}

export default InputPage;