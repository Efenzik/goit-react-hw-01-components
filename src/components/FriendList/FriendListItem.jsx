import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className="status">{isOnline ? "Online" : "Offline"}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <span className="name">{name}</span>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
