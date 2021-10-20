import { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
    state = {
        products:[
            {id:1,title: "product #1" , price: "10$" , quantity : 1},
            {id:2,title: "product #2" , price: "20$" , quantity : 2},
            {id:3,title: "product #3" , price: "30$" , quantity : 3},
            {id:4,title: "product #4" , price: "40$" , quantity : 4},
            {id:5,title: "product #5" , price: "50$" , quantity : 5},
        ]
    }
    deleteProductHandler = (ProductId) => {
        console.log("delete :"+ProductId);
        const ProductsFilter = this.state.products.filter((p) => {
            return(
                p.id !== ProductId
            );
        });
        this.setState({products:ProductsFilter});
    }
    incrementProductHandler = (ProductId) => {
        const products = [...this.state.products]
        const selectedItem = products.find(
            (pro) => {
                return (
                    pro.id === ProductId
                );
            }
        );
/*         console.log(this.state.products);
        console.log(selectedItem);
 */
        selectedItem.quantity++;

        this.setState({products:products});

    }

    changeTitleHandler = (e,ProductId) => {
        const products = [...this.state.products];
        const selecteProduct = products.find((pro) => {
            return(
                pro.id === ProductId
            );
        });
        selecteProduct.title = e.target.value;
        this.setState({products:products});
    }

    decrementProductHandler = (ProductId) => {

        const products = [...this.state.products]
        const selectedItem = products.find(
            (pro) => {
                return (
                    pro.id === ProductId
                );
            }
        );
/*         console.log(this.state.products);
        console.log(selectedItem);
 */
        if(selectedItem.quantity > 1){
            selectedItem.quantity--;
            this.setState({products:products});
        }else{
            this.deleteProductHandler(ProductId);
        }

        

    }
    render() { 
        return <ul>
            {this.state.products.map((pro) =>{
                return(
                     <Product 
                        key={pro.id}
                        product={pro}
                        onIncrement={() => this.incrementProductHandler(pro.id)}
                        onDelete={() => this.deleteProductHandler(pro.id)}
                        onChangeTitle={(e) => this.changeTitleHandler(e,pro.id)}
                        onDecrement={() => this.decrementProductHandler(pro.id)}
                        />
                    )}
                 )}
        </ul>;
    }
}
 
export default ProductList;