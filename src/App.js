import { Component} from "react";
import ProductList from "./components/ProductList/ProductList";
import './App.css';

class App extends Component{
    render() { 
        return (
            <div className="container">
                <ProductList/>
            </div>
            );
    }
}
 
export default App;