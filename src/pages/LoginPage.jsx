import logo from '../images/main_logo.svg';
import cs from './LoginPage.module.css';
import PageForm from "../components/PageForm";

const LoginPage = ({login}) => {
    return (
        <div className={cs.parent}>
            <div className={cs.top}><img src={logo} alt="" /></div>
            <div className={cs.main}>
                {login ?
                    <PageForm buttonPlaceholder="LogIn" inputPlaceholder="User ID" />
                    : <PageForm buttonPlaceholder="Create Room" inputPlaceholder="Room Name" />
                }
            </div>
        </div>
    );
}

export default LoginPage;