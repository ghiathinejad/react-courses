import { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {



    renderProducts = () =>{
        if(this.props.products.length === 0)
            return (<div>no products</div>);

        return(
            <ul>
            {this.props.products.map((pro) =>{
                return(
                     <Product 
                        key={pro.id}
                        product={pro}
                        onIncrement={() => this.props.onIncrement(pro.id)}
                        onDelete={() => this.props.onDelete(pro.id)}
                        onChangeTitle={(e) => this.props.onChangeTitle(e,pro.id)}
                        onDecrement={() => this.props.onDecrement(pro.id)}
                        />
                    )}
                 )}
            </ul>
        );
    } 
    render() { 
        
        return (
                <div>
                    {/* {this.state.products.length ? <div>your cart</div> : <div>go shopping</div>} */}
                    {this.props.products.length && <div>your cart</div>}
                    {this.renderProducts()}
                </div>
        );
    }
}
 
export default ProductList;