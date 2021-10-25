import { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
    
    renderProducts = () =>{
        const {onIncrement,onDelete,onChangeTitle,onDecrement,products} = this.props;
        if(products.length === 0)
            return (<div>no products</div>);

        return(
            <ul>
            {products.map((pro) =>{
                return(
                     <Product 
                        key={pro.id}
                        product={pro}
                        onIncrement={() => onIncrement(pro.id)}
                        onDelete={() => onDelete(pro.id)}
                        onChangeTitle={(e) => onChangeTitle(e,pro.id)}
                        onDecrement={() => onDecrement(pro.id)}
                        />
                    )}
                 )}
            </ul>
        );
    } 
    render() { 
        const {products} = this.props;
        return (
                <div>
                    {/* {this.state.products.length ? <div>your cart</div> : <div>go shopping</div>} */}
                    {products.length && <div>your cart</div>}
                    {this.renderProducts()}
                </div>
        );
    }
}
 
export default ProductList;