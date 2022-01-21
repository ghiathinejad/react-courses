import { Component} from "react";
//import ProductList from "./components/ProductList/ProductList";
import './App.css';
//import NavBar from "./components/Navbar/NavBar";
//import Wrapper from "./components/hoc/Wrapper";
import UseRefExample from "./components/ref/UseRefExample";
//import RefFunction from "./components/ref/RefFunction";
//import CountClick from "./components/hocExample/CountClick";
//import CountHover from "./components/hocExample/CountHover";
//import ParentCom from "./components/PureMemoCom/ParentCom";
//import RefClass from "./components/ref/RefClass";
//import ClassCounter from "./components/ClassCounter";
//import FunctionalCounter from "./components/FunctionalCounter";
//import ClassTimer from "./components/ClassTimer";
//import FunctionalTimer from "./components/FunctionalTimer";

class App extends Component{
    state = {
        products:[
            {id:1,title: "product #1" , price: "10$" , quantity : 1},
            {id:2,title: "product #2" , price: "20$" , quantity : 2},
            {id:3,title: "product #3" , price: "30$" , quantity : 3},
            {id:4,title: "product #4" , price: "40$" , quantity : 4},
            {id:5,title: "product #5" , price: "50$" , quantity : 5},
        ],
        isShow : true
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
        console.log(this.props);
        return (
            <>
                {/*<ClassCounter/>*/}
                {/*<FunctionalCounter/>*/}
                {/*<button onClick={()=>{this.setState({isShow : !this.state.isShow})}}>*/}
                {/*    {this.state.isShow ? 'hide' : 'show'}*/}
                {/*</button>*/}
                {/*{this.state.isShow && <FunctionalTimer /> }*/}
{/*                <NavBar totalItem={this.state.products.length}/>
                <ProductList
                    products={this.state.products}
                    onIncrement={this.incrementProductHandler}
                    onDelete={this.deleteProductHandler}
                    onChangeTitle={this.changeTitleHandler}
                    onDecrement={this.decrementProductHandler}
                
                />*/}

                {/*<CountClick name="maryam"/>
                <CountHover />*/}
{/*                <ParentCom/>
                <RefClass />*/}
                {/*<RefFunction />*/}
                <UseRefExample />
            </>
            );
    }
}
 
export default App;
//export default Wrapper(App,'container');