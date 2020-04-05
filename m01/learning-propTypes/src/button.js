"use strict";

import React, { PropTypes } from "react";

const Button = ({ children, handleClick }) => {
  return <button onClick={handleClick}>{children}</button>;
};

Button.propTypes = {
  handleClick: PropTypes.func
};

export default Button;
