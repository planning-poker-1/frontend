import cs from './EstimateCard.module.css';

const EstimateCard = ({content, className}) => {
    return (
        <div className={cs.main + ' ' + className}>
            <span>{content}</span>
        </div>
    );
}

export default EstimateCard;