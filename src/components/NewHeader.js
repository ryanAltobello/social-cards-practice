import React from "react";

const NewHeader = props => {
  return (
    <div className="center aligned header">{`${props.username.first} ${
      props.username.last
    }`}</div>
  );
};

export default NewHeader;
