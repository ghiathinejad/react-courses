import { Component, Fragment } from "react";

class Product extends Component {
    render() { 
        return <Fragment>
            <li>{this.props.name}</li>
        </Fragment>;
    }
}
 
export default Product;