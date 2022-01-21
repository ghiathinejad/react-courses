import React, {useEffect, useRef} from 'react';

function RefFunction(props) {
    const inRef = useRef();
    useEffect(()=>{
        inRef.current.focus();
    },[]);
    return (
        <div>
            <input type='text' ref={inRef}/>
        </div>
    );
}

export default RefFunction;