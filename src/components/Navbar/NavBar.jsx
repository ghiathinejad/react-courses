import navBarStyle from "./navBar.module.css";
import {useEffect ,useContext} from "react";
import {SiteNameContext, UserInfoContext} from "../../App";
const NavBar = ({totalItem}) => {

    const UserInfo = useContext(UserInfoContext);
    const SiteInfo = useContext(SiteNameContext);

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
        <p>{UserInfo}</p>
        <br/>
        <h2>ghiathinejad shopping</h2>
        <span>({totalItem})</span>
        <br/>
        <p>{SiteInfo}</p>
    </header>);
}
 
export default NavBar;