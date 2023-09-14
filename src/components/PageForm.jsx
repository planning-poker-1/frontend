import Button from './Button';
import cs from './PageForm.module.css';
import Input from "./Input";

const PageForm = ({inputPlaceholder, buttonPlaceholder}) => {
    return (
        <div className={cs.main}>
            <span>Poker Planning for Agile Development Teams</span>
            <span>Work productively with our simple and convenient tool.</span>
            <Input placeholder={inputPlaceholder} />
            <Button placeholder={buttonPlaceholder} />
        </div>
    );
}

export default PageForm;