/*const App = () => {
    return React.createElement('div',{id:'hello',className:'hello-cls'},"hello");
}*/
import Product from "./components/Product/Product";
const App = () => {
    return(
        <div id="title" className="container">
            <h1>Shopping app</h1>
            <Product />
            <Product />
            <Product />
        </div>
    );
}

export default App;

export const username = "maryam";
export const mail = "m.ghiathinejad@gmail.com";
