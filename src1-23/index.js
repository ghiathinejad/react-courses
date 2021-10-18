import React from 'react';
import ReactDOM from 'react-dom';
import App,{username,mail} from './App';
import './index.css';
// const element = React.createElement('div',{id:'hello',className:'hello-cls'},"hello");

// ReactDOM.render(element,document.getElementById('root'));

/*const App = () =>{
    return React.createElement('div',{id:'hello',className:'hello-cls'},"hello");
}*/

ReactDOM.render(<App/>,document.getElementById('root'));
console.log({username,mail});
