import cs from './RoomPage.module.css';
import {useParams} from "react-router-dom";
import Table from "../components/Table";
import NavBar from "../components/NavBar";
import EstimateBar from "../components/EstimateBar";

const RoomPage = () => {
    const params = useParams();

    return (
        <div className={cs.main}>
            <NavBar className={cs.navbar} username="Guest 1" />
            <Table />
            <EstimateBar className={cs.estimate_bar} cards={["0", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "?"]} />
        </div>
    );
}

export default RoomPage;