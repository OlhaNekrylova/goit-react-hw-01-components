import PropTypes from 'prop-types';

import Stat from './Stat';

const StatList = ({items}) => {
    return (
        <ul class="stat-list">
            {items.map(item => (
                <li key={item.id} class="item">
                    <Stat 
                        label={item.label}
                        percentage={item.percentage}
                    />
                </li>
            ))}
        </ul>
    );
}

StatList.PropTypes = {
    items.PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
};

export default StatList;