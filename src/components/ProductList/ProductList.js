import { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
    state = {
        products:[
            {id:1,title: "product #1" , price: "10$"},
            {id:2,title: "product #2" , price: "20$"},
            {id:3,title: "product #3" , price: "30$"},
            {id:4,title: "product #4" , price: "40$"},
            {id:5,title: "product #5" , price: "50$"},
        ]
    }
    deleteProductHandler = (ProductId) => {
        console.log("delete :"+ProductId);
        const ProductsFilter = this.state.products.filter((p) => {
            return(
                p.id !== ProductId
            );
        });
        this.setState({products:ProductsFilter});
    }
    render() { 
        return <ul>
            {this.state.products.map((pro) => <Product key={pro.id} name={pro.title} price={pro.price} onDelete={() => this.deleteProductHandler(pro.id)}/>)}
        </ul>;
    }
}
 
export default ProductList;