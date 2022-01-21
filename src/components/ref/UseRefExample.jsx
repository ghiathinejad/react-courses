import React, {useRef, useState , useEffect} from 'react';

const UseRefExample = () => {
    const [inVal, setInVal] = useState("");
    const prevInVal = useRef();

    const [count,setCount] = useState(0);
    const prevCount = useRef();

    const changeIn = (e) => {
       setInVal(e.target.value);
   }

    useEffect(() => {
        prevInVal.current = inVal;
    }, [inVal]);

    useEffect(() => {
        prevCount.current = count;
    }, [count]);


    return (
        <div>
            <input type='text' value={inVal} onChange={changeIn} ref={prevInVal}/>
            <br/>
            input : {inVal}
            <br/>
            prev input : {prevInVal.current}

            <div>
                <button onClick={() => setCount(Math.ceil(Math.random()*100)) }>generate</button>
                <br/>
                current count : {count}
                <br/>
                previous count : {prevCount.current}
            </div>
        </div>
    );
}

export default UseRefExample;