import { Component, Fragment } from "react";
import ProductList from "./components/ProductList/ProductList";

class App extends Component{
    render() { 
        return <Fragment>
            <ProductList/>
        </Fragment>;
    }
}
 
export default App;