import Button from './Button';
import cs from './PageForm.module.css';
import Input from "./Input";

const PageForm = ({inputPlaceholder, buttonPlaceholder, btnOnClick}) => {
    return (
        <div className={cs.main}>
            <span>Poker Planning for Agile Development Teams</span>
            <span>Work productively with our simple and convenient tool.</span>
            <Input placeholder={inputPlaceholder} />
            <Button onClick={btnOnClick} placeholder={buttonPlaceholder} />
        </div>
    );
}

export default PageForm;