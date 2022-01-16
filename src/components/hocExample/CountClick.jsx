import WithCount from "../hoc/WithCount";

function CountClick({incrementCount,count,name}) {
    return (
        <div>
            <h2 onClick={incrementCount}>{name}! click me (count : {count})</h2>
        </div>
    );
}

export default WithCount(CountClick,5);