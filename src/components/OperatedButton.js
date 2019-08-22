import React from "react";
import PropTypes from "prop-types";

const OperatedButton = props => (
    <div>
        <button onClick={() => props.onClick()}>{props.name}</button>
    </div>
);

OperatedButton.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default OperatedButton;
