import "./InputPage.css";
import Navbar from "../../Atoms/Navbar/Navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAsset } from "../../reducers/assets";
import { toast } from "react-toastify";
import { Navigate } from "react-router";
import { cleanName } from "../../Helper/namers";

const showToast = (id, assetType, price) => {
   toast.success(`Added ${id} to ${cleanName(assetType)}, valued at \$${price}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: "light",
      });
 }

const InputPage = () => {
   const dispatch = useDispatch();
   const [assetType, setAssetType] = useState("Real Estate");
   const [assetName, setAssetName] = useState("");
   const [purchasePrice, setPurchasePrice] = useState("");
   const [purchaseDate, setPurchaseDate] = useState("");
   const [currentMarketValue, setCurrentMarketValue] = useState("");
   const [notes, setNotes] = useState("");
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

   if(!isAuthenticated) return <Navigate to="/"/>

   return <div className="page loginPage">
      <Navbar active="Input"/>
      <div class="input-page">
         <div className="pageHeader">
               <h3>Select a Category and input your asset</h3>
         </div>
         <div>
            <h3>Asset Type</h3>
            <ul class="radio-container">
               <li onClick={() => setAssetType("real_estate")}>
                  <input type="radio" id="radio1" name="asset-types"></input>
                  <label for="radio1">Real Estate</label>
               </li>
               <li onClick={() => setAssetType("stocks")}>
                  <input type="radio" id="radio2" name="asset-types"></input>
                  <label for="radio2">Stocks</label>
               </li>
               <li onClick={() => setAssetType("crypto_currency")}>
                  <input type="radio" id="radio3" name="asset-types"></input>
                  <label for="radio3">Cryptocurrency</label>
               </li>
               <li onClick={() => setAssetType("precious_metal")}>
                  <input type="radio" id="radio4" name="asset-types"></input>
                  <label for="radio4">Precious Metals</label>
               </li>
               <li onClick={() => setAssetType("other")}>
                  <input type="radio" id="radio5" name="asset-types"></input>
                  <label for="radio5">Other</label>
               </li>
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

      <button classname = "submit"
         onClick={() => {
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
         showToast(assetName, assetType, currentMarketValue);
      }}>Submit</button>
   </div>
}

export default InputPage;