import { Component, Fragment } from "react";
import productStyle from "./product.module.css";
import {FaTrashAlt} from "react-icons/fa";

class Product extends Component {
    componentWillUnmount(){
        console.log('componentWillUnmount product.js')

    }
    render() { 
        return <Fragment>
            <li className={productStyle.product}>
                <span>{this.props.product.title}</span>
                <span>:</span>
                <span>{this.props.product.price}</span>
                <span className={productStyle.quantity}>{this.props.product.quantity}</span>
                <input type="text" onChange={this.props.onChangeTitle} value={this.props.product.title} className={productStyle.input} />
                <button className={`${productStyle.increment} ${productStyle.button}`} onClick={this.props.onIncrement}>+</button>
                <button className={`${this.props.product.quantity < 2 && productStyle.delete } ${productStyle.button}`} onClick={this.props.onDecrement}>
                    {this.props.product.quantity > 1 ? "-" : <FaTrashAlt />}
                </button>
                <button className={`${productStyle.delete} ${productStyle.button}`} onClick={this.props.onDelete}>delete</button>
            </li>
        </Fragment>;
    }
}
 
export default Product;