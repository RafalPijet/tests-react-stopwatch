import React from "react";
import PropTypes from "prop-types";

const StoperDisplay = props => (
  <h1 className="stopwatch">{props.output}</h1>  
);

StoperDisplay.propTypes = {
    output: PropTypes.string.isRequired
};

export default StoperDisplay;
