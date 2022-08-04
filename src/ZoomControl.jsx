import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createZoomMachineLayer = () => {
  const instance = L.control.zoom({
    position: 'bottomright'
})
  
//   L.routing.itinerary({
//     styles: [
//         {
//             width:'600px',
//             fontSize:'20pt',
//         }
//     ],
//   });
  return instance;
};

const ZoomMachine = createControlComponent(createZoomMachineLayer);

// RoutingMachine.style = {
//     border:'5px solid green',
// }


export default ZoomMachine;