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
            <div style={{
                height:'5vh',
                fontSize:'2rem',
                width:'100vw',
                marginLeft:'auto',
                marginRight:'auto',
                display:'inline-block',
                textAlign:'center',
                paddingTop:'2vh'
                }}>map and app</div>
            {/** adding some props to map and then way to update them **/}
            <Map center={center} a={a} b={b} />
            <div style={{
                height:'20vh',
                zIndex:'3',
                backgroundColor:'#FFFFFF'
                
            }}>
                <div style={{
                    border:'solid red',
                    borderWidth:'0.4px 0.4px 0px 0.4px',
                    borderRadius:'30px 30px 0px 0px',
                    width:'40vw',
                    height:'15vh',
                    position:'relative',
                    top:'-5vh',
                    zIndex:'1000',
                    margin:'0 auto',
                    backgroundColor:'#FFFFFF',
                }}>
                    <div style={{
                        fontSize:'2rem',
                        width:'40vw',
                        marginLeft:'auto',
                        marginRight:'auto',
                        marginTop:'2vh',
                        display:'inline-block',
                        textAlign:'center'
                    }}>title</div>
                    <div style={{
                        border:'solid red',
                        borderWidth:'0.6px 0.6px 0px 0.6px',
                        borderRadius:'30px 30px 0px 0px',
                        fontSize:'2rem',
                        width:'30vw',
                        marginLeft:'5vw',
                        marginTop:'5vh',
                        display:'inline-block',
                        textAlign:'center',
                        paddingTop:'2vh'
                    }}>balance</div>
                </div>
            </div>
        </div>
  );
}
