import cs from './NavBar.module.css';
import nav_logo from '../images/nav_logo.svg';
import Button from "./Button";

const NavBar = ({username, className}) => {
    return (
        <div className={cs.main + ' ' + className}>
            <img src={nav_logo} alt="" />
            <div className={cs.components}>
                <span>{username}</span>
                <Button placeholder="Invite Team" />
            </div>
        </div>
    );
}

export default NavBar;