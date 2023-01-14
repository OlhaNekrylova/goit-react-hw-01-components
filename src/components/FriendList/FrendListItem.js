import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={css.item}>
            <span classNames={css[isOnline] ? css.statusOnline : css.statusOffline}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.oneOf([true, false]),
};

export default FriendListItem;