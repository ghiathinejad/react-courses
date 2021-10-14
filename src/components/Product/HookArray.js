import { useState } from "react/cjs/react.development";

const HookArray = () => {
    const [item,setItem] = useState([]);
    const randomHandler = () => {
        const newItem = {id: item.length , number: Math.floor(Math.random() * 10)};
        setItem([...item,newItem]);
    }
    return ( 
        <div>
            <button onClick={randomHandler}>random</button>
            {item.map((it) => {return(
                <li key={it.id} >{it.number}</li>
            )})}
        </div>
     );
}
 
export default HookArray;