import React from "react";
function MemoCom() {
    console.log('memo com');
    return (
        <div></div>
    );
}

export default React.memo(MemoCom);