import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import './leaflet-routing-machine.css'
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = ({ position, start, end, color }) => {
  const instance = L.Routing.control({
    position,
    waypoints: [
      start,
      end
    ],
    lineOptions: {
      styles: [
        {
          color,
        },
      ],
    },
  });
  
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

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

// RoutingMachine.style = {
//     border:'5px solid green',
// }


export default RoutingMachine;