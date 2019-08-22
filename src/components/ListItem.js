import React from "react";
import PropTypes from "prop-types";

const ListItem = props => (
        <h2>{props.item}</h2>
);

ListItem.propTypes = {
    item: PropTypes.string.isRequired
};

export default ListItem;
