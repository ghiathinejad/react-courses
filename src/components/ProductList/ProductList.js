import { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
    state = {
        products:[
            {id:1,title: "product #1"},
            {id:2,title: "product #2"},
        ]
    }
    render() { 
        return <ul>
            {this.state.products.map((pro) => <Product key={pro.id} name={pro.title}/>)}
        </ul>;
    }
}
 
export default ProductList;