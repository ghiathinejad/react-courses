import {useContext} from 'react';
import {CountContext, CountDispacherContext} from "./CounterProvider";

function CountOne() {
    const count = useContext(CountContext);
    const setCount = useContext(CountDispacherContext);
    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={() => setCount(count+1)} >add one</button>
        </div>
    );
}

export default CountOne;