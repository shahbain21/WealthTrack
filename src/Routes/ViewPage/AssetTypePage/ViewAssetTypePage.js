import "./ViewAssetTypePage.css";
import Navbar from "../../../Atoms/Navbar/Navbar";
import { useParams } from "react-router";
import { ResponsivePie } from "@nivo/pie";
import { useSelector } from "react-redux/es/hooks/useSelector";

// TODO: GET RID OF EXPORT
import testData from "../../../Test/TestData";


const ViewAssetTypePage = () => {

   const params = useParams();

   const assets = useSelector(state => state.assets.value.assets[params.assetType]);

   return <div className="page loginPage">
      <Navbar active="View"/>

      <ResponsivePie
         data={assets}
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

         onClick={(e) => console.log(e)}
      />
   </div>
}

export default ViewAssetTypePage;