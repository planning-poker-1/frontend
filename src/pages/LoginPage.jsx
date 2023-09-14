import logo from '../images/main_logo.svg';
import cs from './LoginPage.module.css';
import PageForm from "../components/PageForm";
import {useNavigate} from "react-router-dom";

const LoginPage = ({login}) => {
    const nav = useNavigate();

    function btnClick(e) {
        if(login) {
            nav("/room");
        } else {
            nav("/room/1");
        }
    }

    return (
        <div className={cs.parent}>
            <div className={cs.top}><img src={logo} alt="" /></div>
            <div className={cs.main}>
                {login ?
                    <PageForm btnOnClick={(e) => btnClick(e)} buttonPlaceholder="LogIn" inputPlaceholder="User ID" />
                    : <PageForm btnOnClick={(e) => btnClick(e)} buttonPlaceholder="Create Room" inputPlaceholder="Room Name" />
                }
            </div>
        </div>
    );
}

export default LoginPage;