import PropTypes from 'prop-types';

const Statistics = ({title, children}) => {
    return (
        <section class="statistics">
            {title && <h2 class="title">{title}</h2>}
            <StatList 
            
            />
        </section>
    )
}

Statistics.PropTypes = {

};

export default Statistics;






