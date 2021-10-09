const Product = (props) => {
    console.log(props);
    return ( 
        <div>
            <p>product #{props.name} : {props.price} </p> 
            {props.children}
        </div>
        );
}
 
export default Product;