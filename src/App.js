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
    state = {
        products : [
            {id:1 , title : 'javascript' , price : '10$'},
            {id:2 , title : 'nodejs' , price : '20$'},
            {id:3 , title : 'reactjs' , price : '30$'},
        ]
    };
    clickHandler = () => {
        console.log('clicked');
        this.setState({
            products : [
                {id:1 , title : 'javascript' , price : '11$'},
                {id:2 , title : 'nodejs' , price : '22$'},
                {id:3 , title : 'reactjs' , price : '33$'},
            ]
        });
    }
    render() { 
        return(
            <div id="title" className="container">
                <h1>Shopping app</h1>
                {this.state.products.map((pro) => {
                    return <Product key={pro.id} name={pro.title} price={pro.price} />;
                    }
                )}
                <button onClick={this.clickHandler}>change price</button>
            </div>
        );
    }
}
 
export default App;

export const username = "maryam";
export const mail = "m.ghiathinejad@gmail.com";
