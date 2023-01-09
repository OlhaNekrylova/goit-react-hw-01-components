import PropTypes from 'prop-types';

const Stat = ({
    label,
    percentage,
    
}) => {
    return (
            <div>
                <span class="label">{label}</span>
                <span class="percentage">{percentage}%</span>
            </div>
    );
};

Stat.PropTypes = {
    label: PropTypes.string.isRequired, 
    percentage: PropTypes.number.isRequired,
};

export default Stat;