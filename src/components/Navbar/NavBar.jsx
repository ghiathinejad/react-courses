import navBarStyle from "./navBar.module.css";
const NavBar = ({totalItem}) => {
    return (<header className={navBarStyle.navBar}>
        <h2>ghiathinejad shopping</h2>
        <span>({totalItem})</span>
    </header>);
}
 
export default NavBar;