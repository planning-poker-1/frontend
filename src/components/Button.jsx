import cs from './Button.module.css';

const Button = ({placeholder, onClick, className}) => {
    return (
        <button onClick={onClick} className={cs.main + ' ' + className}>{placeholder}</button>
    );
}

export default Button;