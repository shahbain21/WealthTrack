import "./ViewPage.css";
import Navbar from "../../../Atoms/Navbar/Navbar";
import { ResponsivePie } from "@nivo/pie";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import { Navigate } from "react-router";
import { cleanName, underscoreName } from "../../../Helper/namers";

const ViewPage = () => {
   const [clickedSubAsset, setClickedSubAsset] = useState("");
   const assets = useSelector(state => state.assets.assets);
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

   if(!isAuthenticated) return <Navigate to="/"/>


   let totals = [];

   for(const key in assets) {
      let total = 0;
      for(let i = 0; i < assets[key].length; i++) {
         total += assets[key][i].value;
      }

      if(total !== 0) {
         totals.push({
            id: cleanName(key),
            value: total
         })
      }
   }

   if(clickedSubAsset !== "") {
      return <Navigate to={`/view/${underscoreName(clickedSubAsset)}`}/>
   }

   if(totals.length === 0) {
      return <div className="page loginPage">
         <Navbar active="View"/>
         <h1>No Assets to View</h1>
      </div>
   }

   return <div className="page loginPage">
      <Navbar active="View"/>

      <ResponsivePie
         data={totals}
         sortByValue={true}
         innerRadius={0.5}
         // Maybe change value of padAngle?
         padAngle={0.7}
         activeOuterRadiusOffset={8}
         borderWidth={1.5}
         borderColor={{
               from: 'color',
               modifiers: [
                  [
                     'darker',
                     0.2
                  ]
               ]
         }}
         arcLinkLabelsSkipAngle={10}
         arcLinkLabelsTextColor="#333333"
         arcLinkLabelsThickness={2}
         arcLinkLabelsColor={{ from: 'color' }}
         arcLabelsSkipAngle={10}
         arcLabelsTextColor={{
               from: 'color',
               modifiers: [
                  [
                     'darker',
                     2
                  ]
               ]
         }}
         defs={[
            {
               id: 'dots',
               type: 'patternDots',
               background: 'inherit',
               color: 'rgba(255, 255, 255, 0.3)',
               size: 4,
               padding: 1,
               stagger: true
            },
            {
               id: 'lines',
               type: 'patternLines',
               background: 'inherit',
               color: 'rgba(255, 255, 255, 0.3)',
               rotation: -45,
               lineWidth: 6,
               spacing: 10
            }
         ]}

         onClick={(e) => setClickedSubAsset(e.id)}
         margin={{ top: 110, right: 70, bottom: 70, left: 70 }} // Adjust margins
      />
   </div>
}

export default ViewPage;