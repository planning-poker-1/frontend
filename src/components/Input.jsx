import cs from './Input.module.css';

const Input = ({placeholder}) => {
    return (
        <input className={cs.main} placeholder={placeholder} />
    );
}

export default Input;