//import './product.css';
//import { Fragment } from 'react';
//import React from 'react';
import styless from './product.module.css';

const Product = (props) => {
    console.log(props);
    return ( 
/*         <Fragment>
            <p>product #{props.name} : {props.price} </p> 
            {props.children}
        </Fragment> */
/*         <React.Fragment>
            <p>product #{props.name} : {props.price} </p> 
            {props.children}
        </React.Fragment> */
/*         <>
            <p>product #{props.name} : {props.price} </p> 
            {props.children}
        </> */

        <div /* className="product" */ className={styless.product} onClick={props.click}>
            <p>product #{props.name} : {props.price} </p> 
            {props.children}
        </div>
        );
}
 
export default Product;