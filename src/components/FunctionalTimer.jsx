import React, {useEffect , useState} from 'react';

const FunctionalTimer = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        const myTimer = setInterval(()=>{
            console.log('hi maryam functional');
            setCount( count + 1);
            console.log(count);
        },1000);
        return (()=>{
            clearInterval(myTimer);
        });
    })

    return (
        <div>
            this is functional
        </div>
    );
};

export default FunctionalTimer;
