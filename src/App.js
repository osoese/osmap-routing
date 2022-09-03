import React, { useState } from 'react';
import Main from './Main';
import './App.css';

export default function App() {
    // original params were from east to west coast across the US
    // const center=[37.0902, -95.7129];
    // const a = [38.9072, -77.0369];
    // const b = [37.7749, -122.4194];
    // let's define something more local
    const center=[40.50540113042952, -75.49626820799801]; // center valley
    const a = [40.62482726194336, -75.36206766577163]; // bethlehem
    const b = [40.4404497141891, -75.34140475576858]; // quakertown
    const [title, setTitle] = useState('Map');
    return (
        <div style={{margin:'0px'}}>
            <div className={`head-banner`}>map and app</div>
            {/** adding some props to map and then way to update them **/}
            <Main center={center} a={a} b={b} setTitle={setTitle} />
            <div className={`footer-wrapper`}>
                <div className={`footer-control`}>
                    <div className={`footer-tab white-bottom`}>{title}</div>
                    <div className={`footer-tab white-bottom`}>balance</div>
                </div>
                <div className={`footer-anchor`}>
                    no
                </div>
                <div className={`footer-overlay`}>
                    overlay
                </div>
            </div>
        </div>
  );
}
