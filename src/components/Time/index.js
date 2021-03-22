//eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ru from "date-fns/locale/ru";

const Time = ({ date }) => {
	return formatDistanceToNow(date, { addSuffix: true, locale: ru });
};
Time.propTypes = {
	date: PropTypes.string,
	// date: PropTypes.instanceOf(Date),
};

export default Time;
