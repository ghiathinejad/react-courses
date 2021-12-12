import { Component} from "react";
import ProductList from "./components/ProductList/ProductList";
import './App.css';
import NavBar from "./components/Navbar/NavBar";

class App extends Component{
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
        /*
        * id
        * index
        * copy az on index
        * */
        const products = [...this.state.products];
        const selectedItemIndex = products.findIndex(
            (pro) => {
                return (
                    pro.id === ProductId
                );
            }
        );
        const productSelected = {...this.state.products[selectedItemIndex]};
        productSelected.quantity++;

        products[selectedItemIndex] = productSelected;

        this.setState({products:products});

/*
     // روش غلط
     const products = [...this.state.products]
        const selectedItem = products.find(
            (pro) => {
                return (
                    pro.id === ProductId
                );
            }
        );

        selectedItem.quantity++;
        this.setState({products:products});*/

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
        const products = [...this.state.products];
        const selectedItemIndex = products.findIndex(
            (pro) => {
                return (
                    pro.id === ProductId
                );
            }
        );
        const productSelected = {...this.state.products[selectedItemIndex]};



        if(productSelected.quantity > 1){
            productSelected.quantity--;

            products[selectedItemIndex] = productSelected;

            this.setState({products:products});
        }else{
            this.deleteProductHandler(ProductId);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState.products);
    }

    render() { 
        return (
            <div className="container">
                <NavBar totalItem={this.state.products.length}/>
                <ProductList
                    products={this.state.products}
                    onIncrement={this.incrementProductHandler}
                    onDelete={this.deleteProductHandler}
                    onChangeTitle={this.changeTitleHandler}
                    onDecrement={this.decrementProductHandler}
                
                />
            </div>
            );
    }
}
 
export default App;