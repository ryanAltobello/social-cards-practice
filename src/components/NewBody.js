import React from "react";

const NewBody = props => {
  return (
    <div className="center aligned description">
      {`${props.location.street} \n

      ${props.location.city}, 
      ${props.location.state}
      ${props.location.postcode}`}
    </div>
  );
};

export default NewBody;
