/*const App = () => {
    return React.createElement('div',{id:'hello',className:'hello-cls'},"hello");
}*/
/*import Product from "./components/Product/Product";
const App = () => {
    return(
        <div id="title" className="container">
            <h1>Shopping app</h1>
            <Product name="javascript" price="10$" />
            <Product name="nodejs" price="20$" />
            <Product name="reactjs" price="30$">
                "discount is 12%"
                <p>happy for you</p>
            </Product>
        </div>
    );
}

export default App;*/


import { Component } from "react";
import Product from "./components/Product/Product";

class App  extends Component {
    render() { 
        return(
            <div id="title" className="container">
                <h1>Shopping app</h1>
                <Product name="javascript" price="10$" />
                <Product name="nodejs" price="20$" />
                <Product name="reactjs" price="30$">
                    "discount is 12%"
                    <p>happy for you</p>
                </Product>
            </div>
        );
    }
}
 
export default App;

export const username = "maryam";
export const mail = "m.ghiathinejad@gmail.com";
