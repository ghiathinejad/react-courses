import {useState} from 'react';

function WithCount(WrapComponent,counterVal) {
    const updateComponent = (props) =>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [count,setCount] = useState(0);
        const incrementCount = () =>{
            setCount(count+counterVal);
        }
        return <WrapComponent count={count} incrementCount={incrementCount} {...props} />
    }
    return updateComponent;
}

export default WithCount;