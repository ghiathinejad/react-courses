import WithCount from "../hoc/WithCount";

function CountHover({incrementCount,count}) {
    return (
        <div>
            <h2 onMouseEnter={incrementCount}>hover me (count : {count})</h2>
        </div>
    );
}

export default WithCount(CountHover,10);