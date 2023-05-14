import PropTypes from 'prop-types';
import css from './friendList.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className= "item">
            <span className={isOnline ? css.online : css.offline} />
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li> 
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    )
}

export default FriendListItem