import React, { useEffect, useState, useRef } from "react";
import Map from './Map';
import Text from './Text';

const Main = (props) => {
    const [mainView, setMainView] = useState('Map');
    const updateMainView = () => {
        if(mainView === 'Map'){
            setMainView('Text');
            props.setTitle('Text');
        }else{
            setMainView('Map');
            props.setTitle('Map');
        }
    };

    return(
        <>
            {(mainView === 'Map' && <Map center={props.center} a={props.a} b={props.b} />)}
            {(mainView === 'Text' && <Text center={props.center} a={props.a} b={props.b} />)}
            <div
                style={{position:'absolute', top:'97vh', width:'100vw', zIndex:'900', textAlign:'center'}}
                onClick={updateMainView}
            >Main View is {mainView} click to change</div>
        </>

    )
}

export default Main;