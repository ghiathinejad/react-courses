import { useState } from "react";

const HookCount = () => {
    const [count,setCount] = useState(0);
    const countHandler = () =>{
        setCount(count+1);
    }

    const plus5tHandler = () => {
        for(let i = 0 ; i < 5 ; i++){
            // setCount(count+1);
             setCount((oldnum) => oldnum + 1);
        }
    }
    return (
        <div>
            <div>{count}</div>  
            <button onClick={countHandler}>add 1</button>
            <button onClick={plus5tHandler}>add 5</button>
        </div>
      );
      
    }
    export default HookCount;