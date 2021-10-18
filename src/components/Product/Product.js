//import './product.css';
import styless from './product.module.css';

const Product = (props) => {
    console.log(props);
    return ( 
        <div /* className="product" */ className={styless.product} onClick={props.click}>
            <p>product #{props.name} : {props.price} </p> 
            {props.children}
        </div>
        );
}
 
export default Product;