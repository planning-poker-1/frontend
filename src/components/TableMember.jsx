import cs from './TableMember.module.css';

const TableMember = ({name}) => {
    return (
        <div className={cs.main}>
            <div className={cs.card}></div>
            <span>{name}</span>
        </div>
    );
}

export default TableMember;