import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import {
  TileLayer,
  MapContainer,
  LayersControl
} from "react-leaflet";
import { Button } from "@material-ui/core";

import RoutingControl from './RoutingControl'
import ZoomControl from './ZoomControl';

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

const Map = (props) => {
  const [map, setMap] = useState(null);
  const [start, setStart] = useState(props.a)
  const [end, setEnd] = useState(props.b)

  return (
    <>
      <MapContainer
        center={props.center}
        zoom={1}
        zoomControl={false}
        style={{ height: "73vh", width: "98vw", padding: 0 }}
        whenCreated={map => setMap(map)}
      >
        {/* *************** */}
        {/* Pass in our custom control layer here, inside of the map container */}
        {/* *************** */}
        <RoutingControl 
          position={'topleft'} 
          start={start} 
          end={end} 
          color={'#757de8'}
        />
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        <ZoomControl />
      </MapContainer>
    </>
  );
};

export default Map;
