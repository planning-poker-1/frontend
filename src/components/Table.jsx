import cs from './Table.module.css';
import table from '../images/table.svg';
import TableMember from "./TableMember";

const Table = () => {
    return (
        <div className={cs.main}>
            <div className={cs.top + ' ' + cs.display}>
                <TableMember />
                <TableMember />
            </div>
            <div className={cs.left_right + ' ' + cs.display}>
                <TableMember />
                <img className={cs.table} src={table} alt="" />
                <TableMember />
            </div>
            <div className={cs.bottom + ' ' + cs.display}>
                <TableMember />
                <TableMember />
            </div>
        </div>
    );
}

export default Table;