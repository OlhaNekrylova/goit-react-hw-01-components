import PropTypes from 'prop-types';
import FriendListItem from './FrendListItem';
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({id, avatar, name, isOnline}) => (
                <FriendListItem
                    key={id} 
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    );
};

FriendList.PropTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
        }),
    ),
};

export default FriendList;