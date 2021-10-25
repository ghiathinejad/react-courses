import navBarStyle from "./navBar.module.css";
const NavBar = (props) => {
    return (<header className={navBarStyle.navBar}>
        <h2>ghiathinejad shopping</h2>
        <span>({props.totalItem})</span>
    </header>);
}
 
export default NavBar;