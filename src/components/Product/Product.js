import { Component, Fragment } from "react";
import productStyle from "./product.module.css";

class Product extends Component {
    render() { 
        return <Fragment>
            <li className={productStyle.product}>
                <span>{this.props.name}</span><span>:</span> <span>{this.props.price}</span>
                <button className={productStyle.delete} onClick={this.props.onDelete}>delete</button>    
            </li>
        </Fragment>;
    }
}
 
export default Product;