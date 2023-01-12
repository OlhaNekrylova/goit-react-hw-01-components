import PropTypes from 'prop-types';

import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(({id, avatar, name, isOnline}) => (
                <li 
                className={css.item}
                    key={id}
                >
                    <span classNames={css.status}>{isOnline}</span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            )
            )}
        </ul>
    );
};

FriendList.PropTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
};

export default FriendList;