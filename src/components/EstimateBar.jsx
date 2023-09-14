import cs from './EstimateBar.module.css';
import EstimateCard from "./EstimateCard";

const EstimateBar = ({cards, className}) => {
    return (
        <div className={cs.main + ' ' + className}>
            {cards.map((card, idx) => <EstimateCard key={idx} className={cs.card} content={card} />)}
        </div>
    );
}

export default EstimateBar;