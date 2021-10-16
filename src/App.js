/*const App = () => {
    return React.createElement('div',{id:'hello',className:'hello-cls'},"hello");
}*/
/*
import { useState } from "react";
import ClassCount from "./components/ClassCount";
import HookCount from "./components/HookCount";
import HookObject from "./components/HookObject";
import HookArray from "./components/Product/HookArray";
import Product from "./components/Product/Product";
import './App.css';
 const App = () => {
    const [products,setProducts] = useState( [
            {id:1 , title : 'javascript' , price : '10$'},
            {id:2 , title : 'nodejs' , price : '20$'},
            {id:3 , title : 'reactjs' , price : '30$'}
        ]
    );
    const clickHandler = () =>{
        setProducts([
            {id:1 , title : 'javascript' , price : '11$'},
            {id:2 , title : 'nodejs' , price : '22$'},
            {id:3 , title : 'reactjs' , price : '33$'}
        ]
        );
    }
    return(
        <div id="title" className="container">
            <h1>Shopping app</h1>
             {products.map((pro) => {
                    return(<Product key={pro.id} name={pro.title} price={pro.price} />)
                    }
                )
            } 
            {products.map((pro,index) => {
                    return(<Product key={index} name={pro.title} price={pro.price} />)
                    }
                )
            } 
            <button onClick={clickHandler}>change price</button>
            <HookCount />
            <hr/>
            <ClassCount/>
            <hr/>
            <HookObject/>
            <hr/>
            <HookArray />

            <hr/>

            
        </div>
    );
}

export default App; */



import { Component } from "react";
import Product from "./components/Product/Product";

class App  extends Component {
    state = {
        products : [
            {id:1 , title : 'javascript' , price : '10$'},
            {id:2 , title : 'nodejs' , price : '20$'},
            {id:3 , title : 'reactjs' , price : '30$'},
        ],
        count: 12
    };
    clickHandler = () => {
        console.log('clicked');
        this.setState({
            products : [
                {id:1 , title : 'javascript' , price : '11$'},
                {id:2 , title : 'nodejs' , price : '22$'},
                {id:3 , title : 'reactjs' , price : '33$'},
            ],
            count : 12
        });
    }

    constructor(props){
        super(props);
        this.countHandler = this.countHandler.bind(this);
    }
    countHandler(){
        this.setState({count:this.state.count + 1});
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
                <button onClick={this.countHandler} >count (learn this)</button>
            </div>
        );
    }
}
 
export default App;

export const username = "maryam";
export const mail = "m.ghiathinejad@gmail.com";