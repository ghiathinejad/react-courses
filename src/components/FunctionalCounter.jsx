import {useEffect, useState} from "react";
const FunctionalCounter = () => {
    const [name,setName] = useState('');
    const [count,setCount] = useState(0);

    useEffect(() => {
        document.title = `clicked update: ${count} ${name} time`;
    },[count]);
    return(
        <div>
            <input type='text' value={name} onChange={(e) => {setName( e.target.value)}}/>
            <button onClick={()=>{setCount(count+1)}}> count: {count}</button>
        </div>
    );
}
export default FunctionalCounter;