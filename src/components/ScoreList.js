import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const ScoreList = props => (
    <div>
        {props.scoreList.map((item, i) => (
                <ListItem key={i} item={item}/>
            )
        )}
    </div>
);

ScoreList.propTypes = {
    scoreList: PropTypes.array.isRequired
};

export default ScoreList;
