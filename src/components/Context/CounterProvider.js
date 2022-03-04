import {createContext, useState} from "react";

export const CountContext = createContext();
export const CountDispacherContext = createContext();

function CounterProvider({children}) {
    const [count,setCount] = useState(1);
    return (
        <CountContext.Provider value={count}>
            <CountDispacherContext.Provider value={setCount}>
                {children}
            </CountDispacherContext.Provider>
        </CountContext.Provider>
    );
}

export default CounterProvider;