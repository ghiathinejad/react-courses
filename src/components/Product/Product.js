import { Component, Fragment } from "react";
import productStyle from "./product.module.css";

class Product extends Component {
    render() { 
        return <Fragment>
            <li className={productStyle.product}>
                <span>{this.props.product.title}</span><span>:</span> <span>{this.props.product.price}</span>
                <span className={productStyle.quantity}>{this.props.product.quantity}</span>
                <button className={`${productStyle.increment} ${productStyle.button}`} onClick={this.props.onIcrement}>increment</button>
                <button className={`${productStyle.delete} ${productStyle.button}`} onClick={this.props.onDelete}>delete</button>
            </li>
        </Fragment>;
    }
}
 
export default Product;