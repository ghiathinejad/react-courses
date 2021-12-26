import navBarStyle from "./navBar.module.css";
import {useEffect} from "react";
const NavBar = ({totalItem}) => {
    // cdm + cdu + cwum => useEffect

    //cdm
    useEffect(()=>{
       console.log('use effect mount navbar')
    },[]);


    //cdu
    useEffect(()=>{
        console.log('use effect update navbar')
    },[totalItem]);

    //cwum
    useEffect(()=>{
        console.log('use effect cwum1 navbar')
        return()=>{
            console.log('use effect cwum2 navbar')
        }
    },[]);


    return (<header className={navBarStyle.navBar}>
        <h2>ghiathinejad shopping</h2>
        <span>({totalItem})</span>
    </header>);
}
 
export default NavBar;