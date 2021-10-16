import './product.css';
const Product = (props) => {
    console.log(props);
    return ( 
        <div className="product">
            <p>product #{props.name} : {props.price} </p> 
            {props.children}
        </div>
        );
}
 
export default Product;