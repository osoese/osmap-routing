import React from 'react';
import Map from './Map';

export default function App() {
    // original params were from east to west coast across the US
    // const center=[37.0902, -95.7129];
    // const a = [38.9072, -77.0369];
    // const b = [37.7749, -122.4194];
    // let's define something more local
    const center=[40.50540113042952, -75.49626820799801]; // center valley
    const a = [40.62482726194336, -75.36206766577163]; // bethlehem
    const b = [40.4404497141891, -75.34140475576858]; // quakertown
    return (
        <div style={{margin:'0px'}}>
            <div style={{height:'5vh',margin:'0px'}}>hello</div>
            {/** adding some props to map and then way to update them **/}
            <Map center={center} a={a} b={b} />
            <div style={{height:'5vh',margin:'0px'}}>hello</div>
        </div>
  );
}
