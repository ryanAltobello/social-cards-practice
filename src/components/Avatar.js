import React from "react";

const Avatar = props => {
  return (
    <div className="center aligned author">
      <img className="ui avatar image" src={`${props.picture}`} />
    </div>
  );
};

export default Avatar;
