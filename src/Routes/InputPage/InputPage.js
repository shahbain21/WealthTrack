import "./InputPage.css";
import Navbar from "../../Atoms/Navbar/Navbar";
import { useState } from "react";

const InputPage = () => {
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
               <li onClick={() => setAssetType("Real Estate")}>Real Estate</li>
               <li onClick={() => setAssetType("Stocks")}>Stocks</li>
               <li onClick={() => setAssetType("Crypto currency")}>Crypto currency</li>
               <li onClick={() => setAssetType("Precious Metal")}>Precious Metal</li>
               <li onClick={() => setAssetType("Other")}>Other</li>
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
            assetType: assetType,
            assetName: assetName,
            purchasePrice: purchasePrice,
            purchaseDate: purchaseDate,
            currentMarketValue: currentMarketValue,
            notes: notes
         }
      }}></button>
   </div>
}

export default InputPage;