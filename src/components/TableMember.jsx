import cs from './TableMember.module.css';
import {useEffect, useRef} from "react";
import addIcon from '../images/add_icon.svg';

const TableMember = ({name}) => {
    const card = useRef();

    useEffect(() => {
        card.current.style.backgroundImage = `url(${addIcon})`;
    }, []);

    return (
        <div className={cs.main}>
            <div ref={card} className={cs.card}></div>
            <span>{name}</span>
        </div>
    );
}

export default TableMember;