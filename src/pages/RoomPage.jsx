import cs from './RoomPage.module.css';
import {useParams} from "react-router-dom";
import Table from "../components/Table";

const RoomPage = () => {
    const params = useParams();

    return (
        <div className={cs.main}>
            <Table />
        </div>
    );
}

export default RoomPage;